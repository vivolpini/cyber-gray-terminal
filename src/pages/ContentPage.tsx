
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample content data - this would be replaced with actual data in production
const contentItems = [
  {
    id: 1,
    title: 'Understanding Cyber Security Fundamentals',
    content: 'Cyber security is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes. Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.',
  },
  {
    id: 2,
    title: 'Network Security Best Practices',
    content: 'Network security consists of the policies and practices adopted to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources. Network security involves the authorization of access to data in a network, which is controlled by the network administrator. Users choose or are assigned an ID and password or other authenticating information that allows them access to information and programs within their authority.',
  },
  {
    id: 3,
    title: 'Endpoint Protection Strategies',
    content: 'Endpoint protection refers to a methodology of protecting a corporate network when accessed via remote devices such as laptops or other wireless and mobile devices. Each device with a remote connecting to the network creates a potential entry point for security threats. Endpoint security is designed to secure each endpoint on the network created by these devices.',
  },
];

const ContentPage: React.FC = () => {
  // Function to truncate text for preview
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto pt-32 px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8">Content Library</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
          Browse through our collection of cybersecurity articles and resources. Click on any item to read the full content.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item) => (
            <Card key={item.id} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">
                  {truncateText(item.content)}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
