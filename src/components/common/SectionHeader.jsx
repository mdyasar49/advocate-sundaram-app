import React from 'react';
import { Chip, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const SectionHeader = ({ tag, title, ratingText, className = '' }) => {
  return (
    <div className={`section-header text-center mb-12 flex flex-col items-center justify-center mx-auto w-full ${className}`}>
      {tag && (
        <Chip
          label={tag}
          sx={{
            background: 'rgba(212, 175, 55, 0.12)',
            color: 'var(--gold-accent)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '1.5px',
            mb: 1.5,
            mx: 'auto',
          }}
        />
      )}
      {title && (
        <h3 className="section-title text-3xl md:text-4xl font-extrabold text-white font-serif mb-3 text-center w-full">
          {title}
        </h3>
      )}
      {ratingText && (
        <div
          className="rating-badge flex flex-wrap items-center justify-center gap-2.5 mt-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mx-auto"
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '6px 18px',
            borderRadius: '50px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)',
            margin: '10px auto 0 auto',
          }}
        >
          <Rating
            value={5}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            sx={{ color: '#f59e0b', fontSize: '1.1rem', display: 'inline-flex', verticalAlign: 'middle' }}
          />
          <Typography
            variant="body2"
            component="span"
            sx={{
              color: 'var(--gold-accent)',
              fontWeight: 700,
              fontSize: '0.88rem',
              display: 'inline-block',
              verticalAlign: 'middle',
              m: 0,
            }}
          >
            {ratingText}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
