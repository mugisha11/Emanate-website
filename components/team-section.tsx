"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
	{
		name: "Mutesi Florence",
		title: "Executive Director / Founder",
		expertise:
			"Expert in Policy Analysis, Research, Government Relations, and Partnerships with over 17 years of experience.",
		image: "/team/mutesi-passport.jpg",
	},
	{
		name: "Abimbola Akinyemi",
		title: "Research and Programme Director",
		expertise: "",
		image: "/team/abimbola.jpg",
	},
	{
		name: "Peace Kayesu",
		title: "Finance and Accounting Manager",
		expertise: "",
		image: "/team/peace.jpg",
	},
	{
		name: "Kyomugisha Allen",
		title: "M&E GIS Officer",
		expertise: "Focusing on demographic studies and social impact assessment.",
		image: "/team/Kyomugisha Allen.jpg",
	},
	{
		name: "Mugahe Winnie",
		title: "Analysis and Service Delivery Officer",
		expertise: "Focusing on demographic studies and service delivery assessment.",
		image: "/team/mugahe.jpg",
	},
	{
		name: "Mugisha Peter",
		title: "IT & Communication Officer",
		expertise: "",
		image: "/team/peter.jpg",
	},
	{
		name: "Mutabazi Derick",
		title: "Programme Officer",
		expertise:
			"With over 3 years in project management, focuses on program design, implementation, and M&E.",
		image: "/team/mutabazi.jpg",
	},
	{
		name: "Kembabazi Patience",
		title: "Women & Youth Empowerment Officer",
		expertise:
			"Focusing on women and youth social, economic, and cultural development. Bringing innovation and perspectives that shape societal progress.",
		image: "/team/kembabazi.jpg",
	},
	{
		name: "Timaza Annet",
		title: "Office Affairs Officer",
		expertise: "Managing day-to-day office tasks, with over 10 years experience.",
		image: "/team/timaza.jpg",
	},
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
}

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export function TeamSection() {
	return (
		<section className="py-16 bg-gradient-to-b from-background via-muted/50 to-background">
			<div className="container px-2 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-10"
				>
					<h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
						Meet Our Expert Team
					</h2>
					<div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto mb-4" />
					<p className="text-base text-muted-foreground max-w-xl mx-auto">
						A diverse group of professionals dedicated to evidence-based impact and innovation.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
				>
					{teamMembers.map((member, index) => (
						<motion.div key={index} variants={itemVariants} className="group">
							<Card className="overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-b from-primary/10 to-card/95">
								<CardContent className="p-2">
									<div className="relative mb-2 aspect-[4/5] overflow-hidden rounded-md">
										<img
											src={member.image}
											alt={member.name}
											className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
											<div className="flex gap-1">
												<Button
													size="icon"
													variant="ghost"
													className="h-7 w-7 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
												>
													<Linkedin className="h-3.5 w-3.5" />
												</Button>
												<Button
													size="icon"
													variant="ghost"
													className="h-7 w-7 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
												>
													<Mail className="h-3.5 w-3.5" />
												</Button>
											</div>
										</div>
									</div>
									<div className="text-center space-y-0.5">
										<h3 className="font-semibold text-sm text-foreground line-clamp-1">
											{member.name}
										</h3>
										<p className="text-xs font-medium text-primary/90">
											{member.title}
										</p>
										{member.expertise && (
											<p className="text-[11px] text-muted-foreground line-clamp-2">
												{member.expertise}
											</p>
										)}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
