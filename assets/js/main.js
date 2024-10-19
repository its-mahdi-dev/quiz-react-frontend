const openModal = (title, body) => {
  let el = document.createElement("div");
  el.innerHTML = `
         <input type="checkbox" id="my_modal_7" class="modal-toggle" checked/>
                        <div class="modal" role="dialog">
                            <div class="modal-box">
                                <h3 class="text-lg font-bold">${title}</h3>
                                <p class="py-4">${body}</p>
                            </div>
                            <label class="modal-backdrop" for="my_modal_7">Close</label>
                        </div>
                    </form>
    `
    document.body.appendChild(el)
};

const handlemenu = () =>{
    let menu = document.getElementById("menu");
    if(menu.classList.contains("right-0")){
        menu.classList.remove("right-0");
        menu.classList.add("right-[-100%]");
    }else{
        menu.classList.remove("right-[-100%]");
        menu.classList.add("right-0");
    }
    let backdrop = document.getElementById("backdrop-menu");
    if(backdrop.classList.contains("hidden")){
        backdrop.classList.remove("hidden");
    }else{
        backdrop.classList.add("hidden");
    }
}