$(document).on('input','#ENTRADA',function(){
      var text = $(this).val();
      text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'A');
      text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E');
      text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I');
      text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O');
      text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U');
      text = text.replace(new RegExp('[Ç]', 'gi'), 'C');
      text = text.toLowerCase();
      text = text.replace(/[^a-z-0-9-]+/g, '-');
      $('#SAIDA').val(text);
  });
