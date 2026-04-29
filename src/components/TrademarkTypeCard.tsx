import React from 'react';

interface TrademarkTypeCardProps {
  title: string;
  desc: string;
}

const TrademarkTypeCard: React.FC<TrademarkTypeCardProps> = ({ title, desc }) => {
  return (
    <>
      <style>{`
        .steveblox-card-v2 {
          box-sizing: border-box;
          width: 100%;
          max-width: 320px;
          height: 280px;
          background: #f5f7fa;
          background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          padding: 24px;
          margin: 0 auto;
          color: #0b1d33 !important;
        }

        .steveblox-card-v2:hover {
          transform: scale(1.05);
          box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.15);
          border: 1px solid #0b1d33;
        }

        .steveblox-card-v2-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          pointer-events: none;
        }

        .steveblox-card-v2-title {
          font-size: 1.25rem;
          font-weight: 900;
          color: #0b1d33 !important;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .steveblox-card-v2-desc {
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151 !important;
          line-height: 1.5;
        }
      `}</style>
      <div className="steveblox-card-v2">
        <div className="steveblox-card-v2-content">
          <h3 className="steveblox-card-v2-title" style={{ color: '#0b1d33' }}>{title}</h3>
          <p className="steveblox-card-v2-desc" style={{ color: '#374151' }}>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default TrademarkTypeCard;
