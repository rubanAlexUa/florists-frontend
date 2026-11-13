const FIELDS = ['name', 'description', 'type', 'price', 'amount'] as const;

export const getChangedFields = (
  formData: FormData,
  initial: Record<(typeof FIELDS)[number], string | number>,
) => {
  const changed = new FormData();

  for (const key of FIELDS) {
    const value = formData.get(key);

    if (value !== null && String(value) !== String(initial[key])) {
      changed.set(key, value);
    }
  }

  const image = formData.get('productImage');
  if (image instanceof File) changed.set('productImage', image);

  return changed;
};
