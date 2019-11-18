class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }
    showProfile(user){
        
        
        this.profile.innerHTML = `
            <div class"card card-body mb-3">
                <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid md-2" src="${user.avatar_url}">
                            <a href="${user.html_url}" target="blank" class="brn btn-primary btn-block md-4">Go to profile</a>
                        </div>
                </div>
            </div>
                `;
    }
}