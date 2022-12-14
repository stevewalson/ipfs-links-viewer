const view_nft_btn = document.querySelector('.view_nft'),
        ipfs_link = document.querySelector('.ipfs_link'),
        nft_image = document.querySelector('.nft_image'),
        nft_image_container = document.querySelector('.nft_image_container'),
        overlay = document.querySelector('.overlay'),
        form = document.querySelector('.form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    overlay.style.display =  "flex";
    var replace_ipfs= ipfs_link.value.replace('ipfs://',"");
    nft_image.src = `https://ipfs.filebase.io/ipfs/${replace_ipfs}` ;
    nft_image.onload = ()=>{overlay.style.display =  "none"};
    ipfs_link.value = "";

})

function onError(){
    nft_image.src = "error.png"
}


