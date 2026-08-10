import { createContext, useContext } from 'react';

/**
 * Builds a context plus a hook that throws a useful message when a component
 * is rendered outside its provider — instead of the silent `undefined` that
 * React's default gives you, which is always harder to debug.
 *
 * @param {string} displayName e.g. 'Theme'
 * @returns {[React.Context, () => any]} the context and its consumer hook
 */
export function createSafeContext(displayName) {
  const Context = createContext(undefined);
  Context.displayName = `${displayName}Context`;

  function useSafeContext() {
    const value = useContext(Context);
    if (value === undefined) {
      throw new Error(
        `use${displayName}() must be used inside <${displayName}Provider>. ` +
          'Check that AppProviders wraps this part of the tree.',
      );
    }
    return value;
  }

  return [Context, useSafeContext];
}

export default createSafeContext;
