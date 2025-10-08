import { useEffect, useRef } from "react";

// Default export: drop this component anywhere in your app
function ArtPage() {

  // ===== Canvas refs =====
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgOffsetRef = useRef<number>(0);

  const rand = (min: number, max: number) => min + (max - min) * Math.random();
  const randInt = (min: number, max: number) => Math.floor(rand(min, max + 1));
  const randColor = () => {
    const h = randInt(0, 359);
    const s = randInt(50, 95);
    const l = randInt(40, 65);
    return `hsla(${h} ${s}% ${l}% / 1)`;
  };

  // ===== Resize canvas to device pixels =====
  const fitCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // ===== Drawing primitives =====
  function paint(ctx: CanvasRenderingContext2D) {
    const color = randColor();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function drawTriangle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rot: number,
  ) {
    const r = size;
    const h = (r * Math.sqrt(3)) / 2;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.transform(1, rand(0.5, 1), rand(-0.5, 0.5), 1, 0, 0);
    ctx.moveTo(-r / 2, h / 3);
    ctx.lineTo(r / 2, h / 3);
    ctx.lineTo(0, (-2 * h) / 3);
    ctx.closePath();
    paint(ctx);
    ctx.restore();
  }

  function drawSquare(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rot: number,
  ) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.transform(1, rand(0.5, 1), rand(-0.5, 0.5), 1, 0, 0);
    ctx.rect(-size / 2, -size / 2, size, size);
    paint(ctx);
    ctx.restore();
  }

  function drawEllipse(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    rx: number,
    ry: number,
    rot: number,
  ) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.transform(1, rand(0.5, 1), rand(-0.5, 0.5), 1, 0, 0);
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    paint(ctx);
    ctx.restore();
  }

  // ===== Generate =====
  const generate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear & update a subtle conic background
    bgOffsetRef.current = (bgOffsetRef.current + randInt(20, 80)) % 360;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const sMin = 80;
    const sMax = 120;

    const tasks: Array<() => void> = [];
    for (let i = 0; i < rand(3,7); i++)
      tasks.push(() =>
        drawTriangle(
          ctx,
          rand(0, w),
          rand(0, h),
          rand(sMin, sMax),
          rand(0, Math.PI * 2),
        ),
      );
    for (let i = 0; i < rand(3,7); i++)
      tasks.push(() =>
        drawSquare(
          ctx,
          rand(0, w),
          rand(0, h),
          rand(sMin, sMax),
          rand(0, Math.PI * 2),
        ),
      );
    for (let i = 0; i < rand(3,7); i++)
      tasks.push(() =>
        drawEllipse(
          ctx,
          rand(0, w),
          rand(0, h),
          rand(sMin, sMax),
          rand(sMin, sMax),
          rand(0, Math.PI * 2),
        ),
      );

    // Fisher–Yates shuffle for pleasant layer order
    for (let i = tasks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }
    tasks.forEach((fn) => fn());
  };

  const savePNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "canvas-shapes.png";
    a.click();
  };

  // ===== Effects =====
  useEffect(() => {
    const onResize = () => fitCanvas();
    window.addEventListener("resize", onResize);
    fitCanvas();
    // initial render
    generate();
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ===== UI =====
  return (
    <div className="min-h-[60vh] grid grid-rows-[auto_1fr] gap-3 text-slate-100">
      <header className="sticky top-0 z-10 flex flex-wrap items-end gap-3 bg-slate-900/70 backdrop-blur border-b border-slate-800 p-3">
        <h1 className="text-base font-semibold mr-2">Canvas Shape Generator</h1>

        <div className="ml-auto flex gap-2">
          <button
            className="rounded-full bg-sky-400 text-slate-900 font-semibold px-4 py-2 border border-sky-600"
            onClick={generate}
          >
            Generate
          </button>
          <button
            className="rounded-full px-4 py-2 border border-slate-700 bg-slate-900"
            onClick={savePNG}
          >
            Save PNG
          </button>
        </div>
      </header>

      <div className="relative">
        <canvas ref={canvasRef} style={{'width': '400px', 'height': '600px', 'backgroundColor': '#fff'}} />
      </div>
    </div>
  );
}

export default ArtPage;
