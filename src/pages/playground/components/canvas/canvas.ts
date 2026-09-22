import {
    AfterViewInit,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'eui-canvas',
    templateUrl: './canvas.html',
    styleUrls: ['./canvas.scss']
})
export class CanvasComponent implements AfterViewInit {

    @ViewChild('viewport', { static: true })
    private viewport!: ElementRef<HTMLElement>;

    x = 0;
    y = 0;

    zoom = 1;

    dragging = false;

    private lastX = 0;
    private lastY = 0;

    private readonly minZoom = 0.25;
    private readonly maxZoom = 3;

    private readonly gridSize = 20;

    /*
     * Toolbar zoom levels.
     *
     * Wheel zoom remains smooth, while buttons move
     * between predictable inspection levels.
     */
    private readonly zoomLevels = [
        0.25,
        0.5,
        0.75,
        1,
        1.25,
        1.5,
        2,
        3
    ];


    ngAfterViewInit(): void {
        this.reset();
    }


    onPointerDown(event: PointerEvent): void {

        const target =
            event.target as HTMLElement;

        /*
         * Only start panning from empty canvas space.
         *
         * Components inside canvas-content remain
         * fully interactive.
         */
        if (
            !target.classList.contains('canvas') &&
            !target.classList.contains('canvas-world') &&
            !target.classList.contains('canvas-zoom') &&
            !target.classList.contains('canvas-content')
        ) {
            return;
        }

        this.dragging = true;

        this.lastX = event.clientX;
        this.lastY = event.clientY;

        const viewport =
            event.currentTarget as HTMLElement;

        viewport.setPointerCapture(
            event.pointerId
        );
    }


    onPointerMove(event: PointerEvent): void {

        if (!this.dragging) {
            return;
        }

        const dx =
            event.clientX - this.lastX;

        const dy =
            event.clientY - this.lastY;

        this.x += dx;
        this.y += dy;

        this.lastX = event.clientX;
        this.lastY = event.clientY;
    }


    onPointerUp(event: PointerEvent): void {

        if (!this.dragging) {
            return;
        }

        this.dragging = false;

        const viewport =
            event.currentTarget as HTMLElement;

        if (
            viewport.hasPointerCapture(
                event.pointerId
            )
        ) {
            viewport.releasePointerCapture(
                event.pointerId
            );
        }
    }


    onWheel(event: WheelEvent): void {

        event.preventDefault();

        const viewport =
            this.viewport.nativeElement;

        const rect =
            viewport.getBoundingClientRect();


        /*
         * Cursor position inside the viewport.
         */
        const mouseX =
            event.clientX - rect.left;

        const mouseY =
            event.clientY - rect.top;


        /*
         * Find the logical world coordinate currently
         * underneath the cursor.
         */
        const worldX =
            (mouseX - this.x) / this.zoom;

        const worldY =
            (mouseY - this.y) / this.zoom;


        /*
         * Smooth wheel zoom.
         */
        const factor =
            event.deltaY < 0
                ? 1.1
                : 0.9;


        const nextZoom =
            this.clamp(
                this.zoom * factor,
                this.minZoom,
                this.maxZoom
            );


        /*
         * Move the world origin so that the same logical
         * point remains underneath the cursor after zoom.
         */
        this.x =
            mouseX - worldX * nextZoom;

        this.y =
            mouseY - worldY * nextZoom;

        this.zoom = nextZoom;
    }


    zoomIn(): void {

        const next =
            this.zoomLevels.find(
                level => level > this.zoom + 0.001
            );

        if (next !== undefined) {
            this.zoomAroundCenter(next);
        }
    }


    zoomOut(): void {

        const next =
            [...this.zoomLevels]
                .reverse()
                .find(
                    level => level < this.zoom - 0.001
                );

        if (next !== undefined) {
            this.zoomAroundCenter(next);
        }
    }


    reset(): void {

        const viewport =
            this.viewport.nativeElement;

        this.zoom = 1;

        /*
         * The world origin is placed at the exact
         * center of the visible canvas.
         */
        this.x =
            viewport.clientWidth / 2;

        this.y =
            viewport.clientHeight / 2;
    }


    private zoomAroundCenter(
        nextZoom: number
    ): void {

        const viewport =
            this.viewport.nativeElement;

        const centerX =
            viewport.clientWidth / 2;

        const centerY =
            viewport.clientHeight / 2;


        /*
         * Logical point currently underneath the
         * center of the viewport.
         */
        const worldX =
            (centerX - this.x) / this.zoom;

        const worldY =
            (centerY - this.y) / this.zoom;


        nextZoom =
            this.clamp(
                nextZoom,
                this.minZoom,
                this.maxZoom
            );


        /*
         * Preserve that point while changing zoom.
         */
        this.x =
            centerX - worldX * nextZoom;

        this.y =
            centerY - worldY * nextZoom;

        this.zoom = nextZoom;
    }


    private clamp(
        value: number,
        min: number,
        max: number
    ): number {

        return Math.min(
            Math.max(value, min),
            max
        );
    }


    /*
     * IMPORTANT:
     *
     * Translation only.
     *
     * There is deliberately no scale() here anymore.
     */
    get worldTransform(): string {
        return `translate(${this.x}px, ${this.y}px)`;
    }


    /*
     * The grid belongs to the same logical coordinate
     * system as the canvas.
     */
    get backgroundPosition(): string {
        return `${this.x}px ${this.y}px`;
    }


    get backgroundSize(): string {
        return `${this.gridSize}px ${this.gridSize}px`;
        // const size =
        //   this.gridSize * this.zoom;

        // return `${size}px ${size}px`;
    }


    get zoomPercentage(): number {
        return Math.round(
            this.zoom * 100
        );
    }
}