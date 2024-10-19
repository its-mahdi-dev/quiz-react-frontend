const sunbitAnswer = (form , e) => {
    e.preventDefault();
    let submitBtn = form.getElementsByClassName("submit-btn")[0];
    submitBtn.disabled = true;
    submitBtn.classList.add("text-white");
    submitBtn.innerHTML = '<span class="loading loading-dots loading-md"></span>';
    let answers = document.getElementsByName("radio-5");
    let answer;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].checked)
            answer = answers[i].value;
    }
    if (!answer) {
        openModal("خطا", "لطفا یک گزینه را انتخاب کنید");
        submitBtn.disabled = false;
        submitBtn.classList.remove("text-white");
        submitBtn.innerHTML = "ثبت پاسخ";
        return;
    }
    setTimeout(() => {
        openModal("پاسخ جدید", "پاسخ شما با موفقیت ثبت شد");
        submitBtn.disabled = false;
        submitBtn.classList.remove("text-white");
        submitBtn.innerHTML = "ثبت پاسخ";
        form.reset();
    } , 1000)
}