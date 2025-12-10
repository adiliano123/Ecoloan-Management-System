import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Leaf, Clock, Shield } from "lucide-react";

interface LoanCardProps {
  loan: {
    id: string;
    company: string;
    sector: string;
    amount: number;
    rate: number;
    term: string;
    riskScore: string;
    greenScore: number;
    funded: number;
  };
  index: number;
}

const LoanCard = ({ loan, index }: LoanCardProps) => {
  const riskColors: Record<string, string> = {
    "A+": "text-success",
    "A": "text-success",
    "B+": "text-info",
    "B": "text-warning",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-6 group cursor-pointer transition-all duration-300 hover:shadow-glow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {loan.company}
          </h3>
          <p className="text-sm text-muted-foreground">{loan.sector}</p>
        </div>
        <Badge variant="success" className="flex items-center gap-1">
          <Leaf className="w-3 h-3" />
          {loan.greenScore}/10
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Loan Amount</p>
          <p className="text-lg font-semibold text-foreground">
            ${(loan.amount / 1000000).toFixed(1)}M
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Interest Rate</p>
          <p className="text-lg font-semibold text-primary flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {loan.rate}%
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Term</p>
          <p className="text-sm font-medium text-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {loan.term}
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Risk Score</p>
          <p className={`text-sm font-semibold flex items-center gap-1 ${riskColors[loan.riskScore]}`}>
            <Shield className="w-3 h-3" />
            {loan.riskScore}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-muted-foreground">Funded</span>
          <span className="text-foreground font-medium">{loan.funded}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${loan.funded}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-full bg-gradient-primary rounded-full"
          />
        </div>
      </div>

      {/* Action Button */}
      <Button variant="outline" size="sm" className="w-full">
        View Details
      </Button>
    </motion.div>
  );
};

export default LoanCard;
