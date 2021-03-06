import React, { FC, Suspense } from 'react';
import { LoadingSpiner } from 'components/LoadingSpiner';
import { CharactersList } from './CharactersList';

export interface CharactersProps {}

export const Characters: FC<CharactersProps> = ({ ...props }) => {
    return (
        <>
            <Suspense fallback={<LoadingSpiner centered />}>
                <CharactersList {...props} />
            </Suspense>
        </>
    );
};
