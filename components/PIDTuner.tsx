import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Wind, Activity, Settings } from 'lucide-react';

const PIDTuner: React.FC = () => {
  // PID Constants
  const [kp, setKp] = useState(0.5);
  const [ki, setKi] = useState(0.0);
  const [kd, setKd] = useState(0.0);

  // Simulation State
  const [target, setTarget] = useState(50); // Target height (percentage)
  const [position, setPosition] = useState(0); // Current height (percentage)
  const [velocity, setVelocity] = useState(0);
  const [integral, setIntegral] = useState(0);
  const [lastError, setLastError] = useState(0);
  const [history, setHistory] = useState<number[]>(new Array(100).fill(0));
  
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Physics Constants
  const GRAVITY = 0.5;
  const MASS = 1.0;
  const DT = 0.1; // Time step

  const resetSimulation = () => {
    setPosition(0);
    setVelocity(0);
    setIntegral(0);
    setLastError(0);
    setHistory(new Array(100).fill(0));
  };

  const addDisturbance = () => {
    setVelocity(v => v - 10); // Sudden downward push
  };

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Calculate Error
      const error = target - position;

      // PID Calculations
      const pTerm = kp * error;
      
      // Integral windup protection
      let newIntegral = integral + error * DT;
      if (Math.abs(newIntegral) > 50) newIntegral = 50 * Math.sign(newIntegral); 
      const iTerm = ki * newIntegral;
      
      const dTerm = kd * (error - lastError) / DT;

      const pidOutput = pTerm + iTerm + dTerm;

      // Physics Update
      const force = pidOutput; 
      const netForce = force - GRAVITY;
      const acceleration = netForce / MASS;

      let newVelocity = velocity + acceleration * DT;
      
      // Air resistance / Damping
      newVelocity *= 0.98;

      let newPosition = position + newVelocity * DT;

      // Floor and Ceiling collision
      if (newPosition < 0) {
        newPosition = 0;
        newVelocity = -newVelocity * 0.5; // Bounce
      } else if (newPosition > 100) {
        newPosition = 100;
        newVelocity = -newVelocity * 0.5;
      }

      setPosition(newPosition);
      setVelocity(newVelocity);
      setIntegral(newIntegral);
      setLastError(error);

      // Update History for Graph
      setHistory(prev => {
        const newHistory = [...prev.slice(1), newPosition];
        return newHistory;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [kp, ki, kd, target, position, velocity, integral, lastError]);

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Target Line
    const targetY = canvas.height - (target / 100) * canvas.height;
    ctx.beginPath();
    ctx.strokeStyle = '#22d3ee'; // Cyan
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2;
    ctx.moveTo(0, targetY);
    ctx.lineTo(canvas.width, targetY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw History Line
    ctx.beginPath();
    ctx.strokeStyle = '#4ade80'; // Green
    ctx.lineWidth = 2;
    history.forEach((h, i) => {
        const x = (i / (history.length - 1)) * canvas.width;
        const y = canvas.height - (h / 100) * canvas.height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

  }, [history, target]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-2xl mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white font-tech flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            PID Controller <span className="text-cyan-400">Tuner</span>
          </h3>
          <p className="text-sm text-gray-400">Tune the drone's flight controller to achieve stable hovering.</p>
        </div>
        
        <div className="flex gap-2">
            <button 
                onClick={addDisturbance}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors text-sm border border-slate-700"
            >
                <Wind className="w-4 h-4" />
                Disturbance
            </button>
            <button 
                onClick={resetSimulation}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-900 font-bold rounded hover:bg-cyan-400 transition-colors text-sm"
            >
                <RefreshCw className="w-4 h-4" />
                Reset
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Simulation View */}
        <div className="lg:col-span-2 space-y-4">
            {/* Visual Representation */}
            <div className="h-64 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden">
                {/* Target Marker */}
                <div 
                    className="absolute w-full border-t-2 border-dashed border-cyan-500/50 flex items-center"
                    style={{ bottom: `${target}%` }}
                >
                    <span className="text-xs text-cyan-500 ml-2 bg-slate-900 px-1">Setpoint</span>
                </div>

                {/* Drone */}
                <div 
                    className="absolute left-1/2 w-12 h-12 transform -translate-x-1/2 transition-transform duration-75"
                    style={{ bottom: `${position}%` }}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Body */}
                        <div className="w-12 h-3 bg-slate-200 rounded-full relative z-10"></div>
                        {/* Propellers */}
                        <div className="absolute -top-2 -left-2 w-6 h-1 bg-cyan-400 animate-spin"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-1 bg-cyan-400 animate-spin"></div>
                        {/* Legs */}
                        <div className="absolute top-2 left-2 w-1 h-2 bg-slate-400"></div>
                        <div className="absolute top-2 right-2 w-1 h-2 bg-slate-400"></div>
                    </div>
                </div>
            </div>

            {/* Graph */}
            <div className="h-32 bg-slate-950 rounded-lg border border-slate-800 p-2">
                <canvas ref={canvasRef} width={600} height={120} className="w-full h-full block"></canvas>
            </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-gray-400" />
                <h4 className="font-semibold text-white">Parameters</h4>
            </div>

            {/* Proportional */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-cyan-400">Proportional (Kp)</label>
                    <span className="text-sm text-white font-mono">{kp.toFixed(2)}</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="2" 
                    step="0.01" 
                    value={kp} 
                    onChange={(e) => setKp(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <p className="text-xs text-gray-500 mt-1">Spring force. Pulls towards target.</p>
            </div>

            {/* Integral */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-green-400">Integral (Ki)</label>
                    <span className="text-sm text-white font-mono">{ki.toFixed(3)}</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="0.1" 
                    step="0.001" 
                    value={ki} 
                    onChange={(e) => setKi(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <p className="text-xs text-gray-500 mt-1">Accumulates error. Fixes steady-state offset.</p>
            </div>

            {/* Derivative */}
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-purple-400">Derivative (Kd)</label>
                    <span className="text-sm text-white font-mono">{kd.toFixed(2)}</span>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="5" 
                    step="0.01" 
                    value={kd} 
                    onChange={(e) => setKd(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <p className="text-xs text-gray-500 mt-1">Dampener. Resists rapid changes.</p>
            </div>

            {/* Target Slider */}
             <div className="pt-4 border-t border-slate-700">
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-white">Target Height</label>
                    <span className="text-sm text-white font-mono">{target}%</span>
                </div>
                <input 
                    type="range" 
                    min="10" 
                    max="90" 
                    step="1" 
                    value={target} 
                    onChange={(e) => setTarget(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PIDTuner;
