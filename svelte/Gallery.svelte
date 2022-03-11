<script>


  let images = {
    'Inauguration': [
      'Inauguration 001',
      'Inauguration 002',
      'Inauguration 003',
      'Inauguration 004',
      'Inauguration 005',
      'Inauguration 006',
      'Inauguration 007',
      'Inauguration 008',
    ], 
    'Sessions' : [
      'Sessions 001',
      'Sessions 002',
      'Sessions 003',
      'Sessions 004',
      'Sessions 005',
      'Sessions 006',
      'Sessions 007',
      'Sessions 008',
      'Sessions 009',
      'Sessions 010',
      'Sessions 011',
    ], 
    'College Awards' : [
      'College Awards 001',
      'College Awards 002',
      'College Awards 003',
      'College Awards 004',
      'College Awards 005',
      'College Awards 006',
      'College Awards 007',
      'College Awards 008',
      'College Awards 009',
      'College Awards 010',
      'College Awards 011',
      'College Awards 012',
      'College Awards 013',
      'College Awards 014',
      'College Awards 015',
      'College Awards 016',
      'College Awards 017',
      'College Awards 018',
      'College Awards 019',
      'College Awards 020',
      'College Awards 021',
      'College Awards 022',
      'College Awards 023',
      'College Awards 024',
      'College Awards 025',
      'College Awards 026',
      'College Awards 027',
      'College Awards 028',
      'College Awards 029',
      'College Awards 030',
      'College Awards 031',
      'College Awards 032',
    ], 
    'Student Awards' : [
      'Student Awards 001',
      'Student Awards 002',
      'Student Awards 003',
      'Student Awards 004',
      'Student Awards 005',
      'Student Awards 006',
      'Student Awards 007',
      'Student Awards 008',
      'Student Awards 009',
      'Student Awards 010',
      'Student Awards 011',
      'Student Awards 012',
      'Student Awards 013',
      'Student Awards 014',
      'Student Awards 015',
      'Student Awards 016',
      'Student Awards 017',
      'Student Awards 018',
      'Student Awards 019',
      'Student Awards 020',
      'Student Awards 021',
      'Student Awards 022',
      'Student Awards 023',
    ],
    'Stalls' : [
      'Stalls 001',
      'Stalls 002',
      'Stalls 003',
      'Stalls 004',
      'Stalls 005',
      'Stalls 006',
      'Stalls 007',
    ], 
    'Other': [
      'Other 001',
      'Other 002',
      'Other 003',
      'Other 004',
      'Other 005',
      'Other 006',
      'Other 007',
      'Other 008',
      'Other 009',
      'Other 010',
      'Other 011',
      'Other 012',
      'Other 013',
      'Other 014',
    ], 
  };

  function filter_data(){
    var data = {};

    if(filter){
      data[filter] = images[filter];
    }
    else{
      data = images
    }

    console.log(data);

    return data;
  }

  let filter = "";
  $: filtered = filter ? filter_data() : images;
  
</script>
<div class="container">
  <div class="buttons">
    <a href="" on:click|preventDefault={()=>filter=""} class="button {filter==""?'active': ''}">View All</a>
    {#each Object.keys(images) as folder}
      <a href="" on:click|preventDefault={()=>filter=folder} class="button {filter==folder?'active': ''}" >{folder}</a>
    {/each}
  </div>

  <div class="gallery">
    {#each Object.keys(filtered) as folder}
      {#each filtered[folder] as image, i (folder+i)}
        <img src="/images/photos/{folder}/{image}.jpg" alt="" class="gallery_thumb">        
      {/each}
    {/each}
  </div>
</div>

<style>
  .buttons{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .button{
    background-color: #e7015e;
    margin: 5px;
    padding: 5px 20px;
    color: white;
    appearance: none;
    outline: none;
  }
  .button.active{
    background-color: red;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
  }
  .button.active:hover{
    background-color: red;
  }
  .button:hover{
    background-color: #d20055;
    color: white;
  }
  .gallery{
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    gap: 10px;
  }
  .gallery_thumb{
    width: 100%;
    background: white;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
    padding: 10px;
  }

  @media only screen and (max-width: 600px) {
    .gallery{
      grid-template-columns: auto;
    }
  }
</style>