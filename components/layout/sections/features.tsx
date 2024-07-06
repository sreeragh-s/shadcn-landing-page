import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "PencilRuler",
    title: "Customizable Career Pages",
    description:
      "Easily customize career pages to reflect your company culture and values.", 
  },
  {
    icon: "Goal",  
    title: "Integrated Applicant Tracking",
    description:
      "Manage and streamline candidates seamlessly, from application to hire, with advanced filtering .",
  },
  {
    icon: "BarChart3",
    title: "Insightful Analytics Dashboard",
    description:
      "Gain actionable insights into your recruitment efforts with our intuitive analytics dashboard.",
  },
  {
    icon: "TabletSmartphone",
    title: "Responsive Mobile Experience",
    description:
      "Ensure a seamless experience for candidates on any device..",
  },
  {
    icon: "Timer",
    title: "Efficient Hiring Process",
    description:
      "Save time and effort with candidate management, ensuring a smooth hiring workflow from start to finish.",
  },
  {
    icon: "BriefcaseBusiness",
    title: "Job Posting Management",
    description:
      "Effortlessly create, manage, and promote job postings. Keep track of all your job openings from a centralized dashboard.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container  sm:py-15">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      From crafting captivating career pages to seamless applicant tracking and insightful analytics, streamline your recruitment strategy with precision and ease..
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
