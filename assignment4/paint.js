class StarRatingPainter {

  paint(ctx, geom, props) {
    this.ctx = ctx;
    //Default Setting Value and Color
    const rating = 4.5; //maxmum is 5
    const corners = 5;
    //For Star Fill
    const fillColor = 'orange';
    //For Star Border
    const strokeWidth = 2;
    const strokeColor = 'orange';


    const radius = geom.height / 2;
    const point = geom.width / 5;
    const cY = radius;

    for (let i=0; i<5; i++) {
      const cX = (i * point) + (point / 2);
      const fill = rating - i;

      this.drawStar(radius, cX, cY, corners);
      this.strokeStar(strokeWidth, strokeColor);
      this.fillStar(fill, fillColor, cX, radius);
    }
  }

  drawStar(R, cX, cY, N) {
    this.ctx.beginPath();
    this.ctx.moveTo(cX, cY + R / 2);

    for (let i = 1; i <= N * 2; i++) {
      const theta = i * (Math.PI * 2) / (N * 2);
      const angle = i % 2 === 0 ? R / 2 : R;
      const x = cX + (angle * Math.sin(theta));
      const y = cY + (angle * Math.cos(theta));

      this.ctx.lineTo(x ,y);
    }

    this.ctx.closePath();
  }


  strokeStar(strokeWidth, strokeColor) {
    this.ctx.lineWidth = strokeWidth;
    this.ctx.strokeStyle = strokeColor;
    this.ctx.stroke();
  }
  

  fillStar(fill, fillColor, cX, R) {
    if (fill <= 0) {
      return;
    }

    if (fill >= 1) {
      this.ctx.fillStyle = fillColor;
    } else {
      const x1 = cX - R;
      const x2 = x1 + (R * 2);
      const gradient = this.ctx.createLinearGradient(x1, 0, x2, 0);
      gradient.addColorStop(0, fillColor);
      gradient.addColorStop(fill, fillColor);
      gradient.addColorStop(fill, 'white');
      gradient.addColorStop(1, 'white');

      this.ctx.fillStyle = gradient;
    }
    this.ctx.fill();
  }
}

//Register Paint Class
registerPaint('star-rating', StarRatingPainter);