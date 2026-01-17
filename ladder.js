class LadderGame {
    constructor(canvasId, cities) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.cities = cities;
        this.numTracks = cities.length;
        this.trackWidth = this.canvas.width / (this.numTracks + 1);
        this.ladders = [];
        this.paths = [];
    }

    generateLadders() {
        this.ladders = [];
        for (let i = 0; i < this.numTracks - 1; i++) {
            for (let j = 0; j < 5; j++) { 
                if (Math.random() > 0.5) {
                    const y = (this.canvas.height / 6) * (j + 1);
                    this.ladders.push({ x1: (i + 1) * this.trackWidth, y1: y, x2: (i + 2) * this.trackWidth, y2: y });
                }
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw vertical tracks
        for (let i = 1; i <= this.numTracks; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.trackWidth, 0);
            this.ctx.lineTo(i * this.trackWidth, this.canvas.height);
            this.ctx.stroke();
        }

        // Draw horizontal ladders
        this.ladders.forEach(ladder => {
            this.ctx.beginPath();
            this.ctx.moveTo(ladder.x1, ladder.y1);
            this.ctx.lineTo(ladder.x2, ladder.y2);
            this.ctx.stroke();
        });

        // Draw city names
        this.ctx.font = '16px Arial';
        this.ctx.textAlign = 'center';
        for (let i = 0; i < this.numTracks; i++) {
            this.ctx.fillText(this.cities[i], (i + 1) * this.trackWidth, this.canvas.height - 10);
        }
    }

    run(startTrack) {
        this.generateLadders();
        this.draw();

        let currentTrack = startTrack;
        let y = 0;
        const path = [{ x: (startTrack + 1) * this.trackWidth, y: y }];

        const animate = () => {
            if (y < this.canvas.height) {
                y += 2;
                let onLadder = false;
                this.ladders.forEach(ladder => {
                    if (Math.abs(y - ladder.y1) < 2) {
                        if (currentTrack + 1 === ladder.x1 / this.trackWidth) {
                            currentTrack++;
                            onLadder = true;
                        } else if (currentTrack + 1 === ladder.x2 / this.trackWidth) {
                            currentTrack--;
                            onLadder = true;
                        }
                    }
                });

                path.push({ x: (currentTrack + 1) * this.trackWidth, y: y });

                this.draw();
                this.ctx.beginPath();
                this.ctx.moveTo(path[0].x, path[0].y);
                for (let i = 1; i < path.length; i++) {
                    this.ctx.lineTo(path[i].x, path[i].y);
                }
                this.ctx.strokeStyle = 'red';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 1;

                requestAnimationFrame(animate);
            } else {
                document.getElementById("city").textContent = "대표 도시: " + this.cities[currentTrack];
            }
        };

        animate();
    }
}
