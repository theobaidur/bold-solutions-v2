import { type IconType } from 'react-icons';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  variant?: 'featured' | 'standard';
  gradientFrom?: string;
  gradientTo?: string;
  accentColor?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  ctaLink = '#contact',
  variant = 'standard',
  gradientFrom = 'primary',
  gradientTo = 'purple-600',
  accentColor = 'primary/20'
}: ServiceCardProps) => {
  if (variant === 'featured') {
    return (
      <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-3xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden group border border-slate-200 dark:border-slate-700/50">
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-${accentColor} to-transparent rounded-bl-full opacity-30 dark:opacity-50`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-200/30 dark:to-slate-900/50"></div>
        <div className="relative p-8 md:p-10">
          <div className={`w-16 h-16 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl shadow-lg`}>
            <Icon />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{title}</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-slate-800 dark:text-slate-200">
                <FaCheck className="text-primary mt-1 mr-3 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {ctaText && (
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg group-hover:shadow-primary/30"
            >
              {ctaText} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    );
  }

  // Standard variant
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group dark:bg-slate-800 dark:border-slate-700">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">{title}</h3>
      <p className="text-slate-600 mb-4 leading-relaxed dark:text-slate-400">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
            <FaCheck className="text-primary mt-1 mr-2" /> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
