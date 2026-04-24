import { useNavigate } from 'react-router-dom';
import { getQuestionnaireById } from '../data/questionnaires';
import { useLanguage } from '../context/LanguageContext';
import './QuestionnaireCard.css';

interface QuestionnaireCardProps {
  questionnaireId: string;
}

export const QuestionnaireCard = ({ questionnaireId }: QuestionnaireCardProps) => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const questionnaire = getQuestionnaireById(questionnaireId);
  
  if (!questionnaire) return null;

  const cardImageById: Record<string, string> = {
    babies: '/card-babies.svg',
    children: '/card-children.svg',
    female: '/card-female.svg',
    male: '/card-male.svg'
  };
  
  const handleClick = () => {
    navigate(`/questionnaire/${questionnaireId}`);
  };
  
  return (
    <div className="questionnaire-card" onClick={handleClick}>
      <div className="card-icon">
        <img
          src={cardImageById[questionnaireId]}
          alt={questionnaire.name[lang]}
          className="card-icon-image"
          loading="lazy"
        />
      </div>
      <h3>{questionnaire.name[lang]}</h3>
      <div className="card-arrow">→</div>
    </div>
  );
};

