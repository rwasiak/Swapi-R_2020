import React, { FC, Suspense } from 'react';
import { LoadingSpiner } from 'components/LoadingSpiner';
import { PlanetsList } from './PlanetsList';

export interface PlanetsProps {}

export const Planets: FC<PlanetsProps> = ({ ...props }) => {
    return (
        <Suspense fallback={<LoadingSpiner centered />}>
            <PlanetsList {...props} />
        </Suspense>
    );
};
