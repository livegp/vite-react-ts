import { useEffect } from 'react';
import type { ReactElement } from 'react';

export const ErrorTest = (): ReactElement => {
  useEffect(() => {
    throw new Error('Це тестова помилка для перевірки ErrorFallback');
  }, []);

  return <div>Цей текст ви не побачите, бо буде викинута помилка</div>;
};
