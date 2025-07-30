import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Calendar, BookOpen } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";

const Blog = () => {
    const [status] = usePointerGlow();
  const blogPosts = [
    {
      title: "gRPC Explained in 5 minutes",
      description: "Discover how gRPC powers lightning-fast communication between services with Protocol Buffers and HTTP/2—learn why it’s a top choice for modern microservices!",
      date: "Jul 2025",
      readTime: "5 min read",
      tags: ["gRPC", "Protocol Buffers", "HTTP/2", "Microservices"],
      url: "https://medium.com/@pulinduv/grpc-explained-in-5-minutes-28a3ee10ed95",
      featured: true
    },
    {
      title: "Why Choose GraphQL? A Beginner Friendly Guide",
      description: "As web and mobile applications became more and more complex, developers started facing limitations with traditional REST APIs. REST works well for many use cases, but when applications grow, REST can become too rigid.",
      date: "Jul 2025",
      readTime: "3 min read",
      tags: ["GraphQL", "APIs", "Web Development", "Software Engineering"],
      url: "https://medium.com/@pulinduv/why-choose-graphql-a-beginner-friendly-guide-d48b77a70d05",
      featured: true
    },
    {
      title: "Monolithic vs Microservices Architecture",
      description: "Confused between Monolithic and Microservices Architecture? This post explores the key differences, pros and cons, and helps you choose the right architecture for your project.",
      date: "Jan 2025",
      readTime: "12 min read",
      tags: ["Architecture", "Microservices", "Software Design", "System Design"],
      url: "https://medium.com/@pulinduv/monolithic-vs-microservices-which-one-should-you-choose-a28cc34c8e08",
      featured: true
    },
    {
        title: "Why You Should Know About Design Patterns In 2025",
        description: "Software development can be a complicated process, often involving repeated challenges. As systems became larger and more complex, developers needed better ways to solve common problems without starting from scratch every time.",
        date: "Feb 2025", 
        readTime: "4 min read",
        tags: ["Design Patterns", "Software Development", "Programming", "Best Practices"],
        url: "https://medium.com/@pulinduv/why-you-should-learn-design-patterns-in-2025-b81bcfa03e61",
    }
    
  ];

  const stats = [
    { label: "Articles Published", value: "5+" },
    { label: "Total Views", value: "50+" },
    { label: "Followers", value: "8+" }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Blog & <span className="primary-glow">Writing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about software development, technology trends, and programming best practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 m-12">
          {stats.map((stat, index) => (
            <Card glow key={index} className="border-accent text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card glow key={index} className="border-accent hover:shadow-lg transition-all duration-300 hover:shadow-primary-glow/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  {post.featured && (
                    <Badge className="bg-primary-glow hover:bg-primary-glow/80">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="tech-stack-glow border-tech-stack/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" asChild>
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card glow className="border-accent bg-gradient-to-r from-card to-accent/20">
          <CardContent className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-primary-glow mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Follow My Writing Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I regularly write about software development, technology insights, and programming tutorials. 
              Follow me on Medium to stay updated with my latest articles and technical content.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-primary-glow hover:bg-primary-glow/90">
                <a href="https://medium.com/@pulinduv" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Medium Profile
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Topics I Write About</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Software Architecture", "Database Design", "Web Development", "Node.js", 
              "React.js", "Machine Learning", "System Design", "DevOps", "MongoDB", 
              "JavaScript", "Python", "Full Stack Development"
            ].map((topic, index) => (
              <Badge key={index} variant="secondary" className="hover:bg-accent transition-colors">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;