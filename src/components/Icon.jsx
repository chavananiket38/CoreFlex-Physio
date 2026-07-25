import {
  Bone,
  Activity,
  HeartPulse,
  Brain,
  Home,
  Briefcase,
  Waves,
  Zap,
  Radio,
  Move,
  Syringe,
  CircleDot,
  Hand,
  Dumbbell,
  Circle,
} from "lucide-react";

const map = {
  Bone,
  Activity,
  HeartPulse,
  Brain,
  Home,
  Briefcase,
  Waves,
  Zap,
  Radio,
  Move,
  Syringe,
  CircleDot,
  Hand,
  Dumbbell,
};

export default function Icon({ name, size = 22, className = "", strokeWidth = 1.8 }) {
  const Cmp = map[name] || Circle;
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} />;
}
