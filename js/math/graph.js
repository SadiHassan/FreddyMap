class Graph {
    constructor(points = [], segments = []) {
        this.points = points;
        this.segments = segments;
    }

    // Point functions

    addPoint(point) {
        this.points.push(point);
    }

    tryAddPoint(point) {
        if (!this.containsPoint(point)){
            this.addPoint(point);
            return true;
        }
        return false;
    }

    containsPoint(point) {
        return this.points.find((p) =>p.equals(point));
    }

    // Segment functions

    draw() {
        for (const seg of this.segments) {
            seg.draw(ctx);
        }

        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}