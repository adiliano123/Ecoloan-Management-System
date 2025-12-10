import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LoanCard from "./LoanCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, Search } from "lucide-react";

const sampleLoans = [
  {
    id: "1",
    company: "GreenTech Solar Inc.",
    sector: "Renewable Energy",
    amount: 5500000,
    rate: 8.5,
    term: "36 months",
    riskScore: "A+",
    greenScore: 9,
    funded: 78,
  },
  {
    id: "2",
    company: "EcoTransport Fleet",
    sector: "Electric Vehicles",
    amount: 3200000,
    rate: 9.2,
    term: "24 months",
    riskScore: "A",
    greenScore: 8,
    funded: 92,
  },
  {
    id: "3",
    company: "Sustainable Farms Co.",
    sector: "Agriculture",
    amount: 1800000,
    rate: 7.8,
    term: "48 months",
    riskScore: "B+",
    greenScore: 10,
    funded: 45,
  },
  {
    id: "4",
    company: "CleanWater Solutions",
    sector: "Water Technology",
    amount: 4100000,
    rate: 8.9,
    term: "30 months",
    riskScore: "A",
    greenScore: 9,
    funded: 67,
  },
  {
    id: "5",
    company: "WindPower Dynamics",
    sector: "Renewable Energy",
    amount: 7800000,
    rate: 7.5,
    term: "60 months",
    riskScore: "A+",
    greenScore: 10,
    funded: 88,
  },
  {
    id: "6",
    company: "Recycled Materials Hub",
    sector: "Circular Economy",
    amount: 2400000,
    rate: 10.1,
    term: "18 months",
    riskScore: "B+",
    greenScore: 8,
    funded: 34,
  },
];

const MarketplaceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="marketplace" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Live <span className="text-gradient">Loan Marketplace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse verified green loans with full transparency. 
            Every metric, every document, every impact score — available at a glance.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center gap-4"
        >
          <div className="flex-1 flex items-center gap-3 w-full md:w-auto">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search loans by company, sector..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <select className="bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground">
              <option>Sort by: Highest Rate</option>
              <option>Sort by: Green Score</option>
              <option>Sort by: Risk Score</option>
              <option>Sort by: Term Length</option>
            </select>
          </div>
        </motion.div>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sampleLoans.map((loan, index) => (
            <LoanCard key={loan.id} loan={loan} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="lg">
            View All Opportunities
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
