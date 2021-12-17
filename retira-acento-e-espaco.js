<input id="texto" type="text" >

<script>
    document.getElementById("texto").onkeyup = function(e){
        let text = document.getElementById("texto")
        text = text.value;
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'A')
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E')
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I')
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O')
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U')
        text = text.replace(new RegExp('[Ç]', 'gi'), 'C')
        text = text.toLowerCase()
        text = text.replace(/[^a-z-0-9-]+/g, '-')
        console.log(text)
    }
    
</script>
