function getNearestPoint(cur, points, thresh = Number.MAX_SAFE_INTEGER) {
    let minDist = Number.MAX_SAFE_INTEGER;
    let nearestPoint = null;

    for (const point of points) {
        const dist = distance(point, cur);
        if (dist < thresh && dist < minDist) {
            minDist = dist;
            nearestPoint = point;
        }
    }
    return nearestPoint;
}

function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}