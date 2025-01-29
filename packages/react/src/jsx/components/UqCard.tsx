import { FC, ReactNode } from 'react'

export interface UqCardProps {
  image: ReactNode
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
}

export const UqCard: FC<UqCardProps> = ({ image, icon, title, description }) => (
  <div className="uq-card uq-card--{{ variant }}" data-gtm-category="Card">
    {image && <div className="uq-card__image">{image}</div>}
    <div className="uq-card__content">
      {icon && <div className="uq-card__icon">{icon}</div>}
      <h3 className="uq-card__title">{title}</h3>
      {description && <div className="uq-card__description">{description}</div>}
    </div>
  </div>
)
