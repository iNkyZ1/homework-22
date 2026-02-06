import React, { memo } from "react";

import { useAppDispatch, useAppSelector } from "src/shared/lib/storeHooks";

import { selectIsFavorite } from "src/features/favorites/model/selectors";
import { toggleFavorite } from "src/features/favorites/model/actions";

interface FavoriteToggleButtonProps {
  contactId: string;
}

export const FavoriteToggleButton = memo<FavoriteToggleButtonProps>(
  ({ contactId }) => {
    const dispatch = useAppDispatch();
    const isFav = useAppSelector((state) => selectIsFavorite(state, contactId));

    return (
      <button
        type="button"
        onClick={() => dispatch(toggleFavorite(contactId))}
        aria-label={isFav ? "Убрать из избранного" : "Добавить в избранное"}
        title={isFav ? "Убрать из избранного" : "Добавить в избранное"}
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: "2px 8px",
          background: "white",
          cursor: "pointer",
        }}
      >
        {isFav ? "★" : "☆"}
      </button>
    );
  },
);
