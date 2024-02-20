export const submitForm = async (formData, onSuccess) => {
  const scriptUrl = import.meta.env.VITE_SCRIPT_URL;

  const response = await fetch(
    `${scriptUrl}?name=${formData.name}&email=${formData.email}&subject=${formData.subject}&message=${formData.message}`,
    {
      method: "POST",
    },
  );

  if (response.ok) {
    onSuccess();
  }
};
