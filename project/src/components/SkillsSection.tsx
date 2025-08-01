import { useState } from "react";
import { cn } from '../lib/utils';
import { useInView } from 'react-intersection-observer';

type skill = {
  name: string;
  level: number; // 0–100
  category: string;
};

const skills: skill[] = [
    // Machine Learning
  { name: 'Python', level: 85, category: 'ml' },
  { name: 'TensorFlow', level: 60, category: 'ml' },

  // Frontend
  { name: 'HTML', level: 80, category: 'frontend' },
  { name: 'CSS', level: 75, category: 'frontend' },
  { name: 'JavaScript', level: 75, category: 'frontend' },
  { name: 'TypeScript', level: 75, category: 'frontend' },
  { name: 'React', level: 70, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 65, category: 'backend' },
  { name: 'Express.js', level: 60, category: 'backend' },
  { name: 'PHP', level: 60, category: 'backend' },

  // Database
  { name: 'MySQL', level: 70, category: 'database' },
  { name: 'MongoDB', level: 55, category: 'database' },

  // Tools
  { name: 'Git', level: 70, category: 'tools' },
  { name: 'Docker', level: 50, category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'database', 'ml', 'tools'];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = skills.filter(
        (skill) => activeCategory === 'all' || skill.category.toLowerCase() === activeCategory.toLowerCase()
    );

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <>
        <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            `px-5 py-2 rounded-full transition-colors duration-300 capitalize
                            ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`,
                        )}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div 
                        key={index} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]
                                transition-[width] duration-1500 ease-out"
                                style={{ width: inView ? `${skill.level}%` : '0%' }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span>{skill.level}%</span>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

        </section>
        </>
    )
}