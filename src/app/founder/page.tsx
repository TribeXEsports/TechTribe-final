
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Building, Mail, Target, Rocket, Linkedin, MapPin, Gamepad2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Founder | Swastik Mishra",
  description: "Meet Swastik Mishra, the visionary founder of Tech TribeX. Learn about his journey, vision, and the mission to build India's largest student-driven tech community.",
}

const journeyItems = [
  { title: "K.R. Mangalam University (2024)", description: "Joined university and same year founded Tech TribeX, united 1800+ students in the university building the largest tech community in the university helping students unite, prove resources, guidance, opportunity, tech updates." },
  { title: "Gen AI Workshop at IIT Delhi", description: "In partnership with Edu Tech Life, took students from university to IIT Delhi for a Gen AI workshop." },
  { title: "IoT Workshop at NIT Kurukshetra", description: "Took students for an IoT workshop at NIT Kurukshetra." },
  { title: "Roborush 1.0", description: "Organized the 'Roborush 1.0' tech event at K.R. Mangalam University." },
  { title: "Spiritual Camp at ISKCON Gurgaon", description: "Organized a spiritual camp at ISKCON Gurgaon." },
  { title: "Campus Ambassador Roles", description: "Joined Tech Fest IIT Delhi, Autokriti NIT Kurukshetra, and Blockchain Orbit as a Campus Ambassador." },
  { title: "Founded TribeX Esports", description: "A revolution in Indian esports, from hosting Free Fire Max and BGMI online and offline tournaments to launching their own esports team on global platforms, TribeX Esports is a fastest growing esports organization in India." },
  { title: "BNG Esports Collaboration", description: "Collaborated with BNG Esports with TribeX Esports." },
]

const partners = ["Edu Tech Life", "Blockchain Orbit", "Growbinar", "Autokriti NIT Kurukshetra", "Manav Rachna University", "K.R. Mangalam University", "BNG Esports", "ISKCON Gurugram"]

export default function FounderPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-secondary/30 dark:bg-card">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
               <Image
                src="/founder.jpg"
                alt="Swastik Mishra, Founder of Tech TribeX"
                width={300}
                height={300}
                priority
                data-ai-hint="founder portrait"
                className="rounded-lg object-cover shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left md:w-1/2">
              <p className="text-primary font-semibold">FOUNDER</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-6xl font-headline">
                Swastik Mishra
              </h1>
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Varanasi, Uttar Pradesh</span>
              </div>
              <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
                A visionary community builder from the spiritual heart of India, on a mission to bridge the gap between student potential and real-world tech opportunities.
              </p>
               <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button asChild size="lg">
                    <Link href="https://www.linkedin.com/in/myselfswastikmishra/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Swastik Mishra on LinkedIn">
                        <Linkedin className="mr-2" /> Connect on LinkedIn
                    </Link>
                </Button>
                 <Button asChild size="lg" variant="outline">
                     <Link href="mailto:theswastikmishraofficial@gmail.com">
                        <Mail className="mr-2" /> Get in Touch
                    </Link>
                </Button>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline">My Vision</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
           Tech TribeX is a student community aiming for community growth and creating opportunities for students, organizing tech events and hackathons, and working as a student-driven freelance agency.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Target className="h-10 w-10 text-primary mx-auto" />
              <h3 className="mt-4 text-xl font-bold font-headline">Hands-On Training</h3>
              <p className="mt-2 text-muted-foreground">Empowering students with practical skills through immersive workshops and competitive hackathons.</p>
            </Card>
            <Card className="text-center p-6">
              <Building className="h-10 w-10 text-primary mx-auto" />
              <h3 className="mt-4 text-xl font-bold font-headline">Industry Opportunities</h3>
              <p className="mt-2 text-muted-foreground">Creating pathways to freelance projects and industry collaborations to launch careers.</p>
            </Card>
             <Card className="text-center p-6">
              <Gamepad2 className="h-10 w-10 text-primary mx-auto" />
              <h3 className="mt-4 text-xl font-bold font-headline">TribeX Esports</h3>
              <p className="mt-2 text-muted-foreground">A revolution in Indian esports, hosting tournaments and launching teams on global platforms.</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="py-20 bg-secondary/30 dark:bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center font-headline">My Journey So Far</h2>
           <div className="relative mt-12 max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {journeyItems.map((item, index) => (
               <div key={index} className={`relative flex w-full items-center my-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="hidden md:block md:w-[calc(50%-1rem)]"></div>
                 <div className="z-10 flex-shrink-0 order-1 bg-background w-4 h-4 rounded-full ring-8 ring-background"></div>
                 <Card className="w-full md:w-[calc(50%-1rem)] p-4 shadow-md">
                    <h3 className="font-bold text-lg font-headline">{item.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                 </Card>
               </div>
            ))}
           </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold font-headline">Key Partnerships</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Collaboration is at the heart of our growth. I'm proud to have partnered with these leading organizations to create meaningful impact.
            </p>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {partners.map(partner => (
                    <span key={partner} className="text-xl font-semibold text-muted-foreground filter grayscale hover:grayscale-0 transition-all duration-300">
                        {partner}
                    </span>
                ))}
            </div>
        </div>
      </section>
    </div>
  )
}
