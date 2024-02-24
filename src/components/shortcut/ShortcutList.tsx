"use client";

import { fetchShortcuts } from '@/services/shortcut_service';
import { IShortcut } from '@/types/shortcut.type';
import React, { useState, useEffect } from 'react';


const ShortcutList: React.FC = () => {
  const [shortcuts, setShortcuts] = useState<IShortcut[]>([]);

  useEffect(() => {
    const loadShortcuts = async () => {
      const data = await fetchShortcuts();
      setShortcuts(data);
    };

    loadShortcuts();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 px-2 md:px-0 md:gap-0 md:flex-row md:py-14 py-6 text-center">
      {shortcuts?.map((shortcut) => (
        <div key={shortcut.mainShortcutId} className="flex flex-row w-14 md:w-16 md:mx-6">
          <a href={shortcut.linkUrl} className="block">
            <img src={shortcut.imageUrl} alt={shortcut.title} className="w-full h-auto" />
            <p className="mt-2 text-xs text-gray-600">{shortcut.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShortcutList;
