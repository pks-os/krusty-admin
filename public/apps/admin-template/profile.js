/**
 * @requires session.js
 * @requires modal.js
 */
class Profile {
    constructor() {
        const session = new Session();
        this.profile = session.Get();
        this.HandleDropdown();
        if (location.pathname.includes('/profile')) {
            this.Update();
        }
    }
    /**
     * Esta función depende de la estructura del dropdown del usuario
     */
    HandleDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        // Obtenemos el primer elemento de la lista de dropdown
        const profileAnchor = dropdown.firstChild.nextSibling;
        profileAnchor.href = `/profile/${this.profile.token}/${this.profile.usuario}`;
    }
    /**
     * 
     */
    Update() {
        const updateBtn = document.getElementById('updateBtn');
        const Updateform = document.getElementById('updateForm');

        updateBtn.addEventListener('click', async (evt) => {

            evt.preventDefault();

            // Obtener inputs, textareas, etc.
            const inputs = Array.from(Updateform.getElementsByTagName('input'));
            const txta = Array.from(Updateform.getElementsByTagName('textarea'));

            const inputable = [].concat(inputs, txta)

            const data = {};

            inputable.map(value => data[value.name] = value.value);
            const profileModal = new Modal();

            await profileModal.Confirm({
                message: '¿Estás seguro que deseas actualizar tu información?',
                callback: async () => {
                    fetch('/profile/update', {
                        headers: {
                            'Content-Type': 'application/json',
                            'token': this.profile.token
                        },
                        body: JSON.stringify(data),
                        method: 'PUT'
                    }).then(async response => {
                        this.profile.img = data.img;
                        this.profile.email = data.email;
                        this.profile.nombre = data.usuario;
                        session.Update(this.profile);
                        setTimeout(async () => {
                            const msg = await response.json();
                            const modalAlert = new Modal({ html: `<span>${msg.msg}</span>` });
                            modalAlert.InsertHTML();
                            modalAlert.Open();
                        }, 1000);
                    }).catch(e => console.error);
                }
            });
        });

    }
}
const profile = new Profile();