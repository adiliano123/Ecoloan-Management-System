import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Leaf, Wind, Droplets, Recycle, Sun, TreeDeciduous } from "lucide-react";

const impactMetrics = [
  { icon: Sun, value: "45MW", label: "Clean Energy Funded" },
  { icon: TreeDeciduous, value: "12K", label: "Trees Planted" },
  { icon: Droplets, value: "8.2M", label: "Gallons Water Saved" },
  { icon: Recycle, value: "340T", label: "Waste Diverted" },
];

const greenCategories = [
  { icon: Wind, name: "Renewable Energy", count: 42, growth: "+15%" },
  { icon: Droplets, name: "Water Technology", count: 28, growth: "+23%" },
  { icon: Recycle, name: "Circular Economy", count: 35, growth: "+18%" },
  { icon: Leaf, name: "Sustainable Agriculture", count: 19, growth: "+31%" },
];

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="sustainability" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="success" className="mb-4">
            <Leaf className="w-3 h-3 mr-1" />
            Green Lending Initiative
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Invest in a <span className="text-gradient">Greener Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every loan on ClearLend is verified for environmental impact. 
            Track your contribution to sustainability in real-time.
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Green Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Green Loan Categories</h3>
            <div className="space-y-4">
              {greenCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 group hover:shadow-glow transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">{category.count} active loans</p>
                  </div>
                  <Badge variant="success">{category.growth}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Your Impact Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Track your personal contribution to sustainability. Every investment makes a difference.
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Carbon Offset Progress</span>
                    <span className="text-foreground font-medium">72%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "72%" } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Green Score</span>
                    <span className="text-foreground font-medium">8.5/10</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "85%" } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-border mt-6">
                  <p className="text-sm text-muted-foreground">
                    You've contributed to <span className="text-primary font-semibold">3.2 tons</span> of CO₂ offset this year
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
