/* eslint-disable @typescript-eslint/no-unused-vars */
export const contacctFormValidations = () => {
  const form: HTMLFormElement = document.getElementById(
    "gnu-contact-form",
  ) as HTMLFormElement;

  const getFormInputByName = (name: string) =>
    document.querySelector(`[name=${name}]`);
  const submittButton = document.querySelector('button[type="submit"]');
  const notification = document.querySelector("[role=status]");
  const messageTextarea = document.querySelector(
    'textarea[name="message"]',
  ) as HTMLTextAreaElement;

  const onSubmit = (e: SubmitEvent) => {
    console.log(e);
    e.preventDefault();
    if (form) {
      const data = new FormData(form);
      const dataObject = Object.fromEntries(data.entries());
      submittButton?.classList.add("animate-pulse");
      submittButton?.setAttribute("disabled", "true");
      //  if (!messageTextarea?.value?.length) {
      //    messageTextarea.reportValidity();
      //    messageTextarea.setCustomValidity(
      //      messageTextarea.dataset.errorMinlength,
      //    );
      //    return;
      //  }
      return form.submit();
    }
  };
  const setup = () => {
    form?.addEventListener("submit", onSubmit);
  };
  window.addEventListener("DOMContentLoaded", () => setup());
  document.addEventListener("astro:after-swap", () => setup());
};
