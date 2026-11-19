import React from 'react';
import { Composition } from 'remotion';
import { TechCaseVideo, type TechCaseProps } from './TechCaseVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TechCasePT"
        component={TechCaseVideo}
        durationInFrames={55 * 30}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={
          {
            locale: 'pt',
            audioFile: null,
          } satisfies TechCaseProps
        }
      />
      <Composition
        id="TechCaseEN"
        component={TechCaseVideo}
        durationInFrames={55 * 30}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={
          {
            locale: 'en',
            audioFile: null,
          } satisfies TechCaseProps
        }
      />
    </>
  );
};
