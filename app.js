(function(){
  var LOOKS={
    original:{name:'Original',cw:'sea',blurb:'Soft rounded cards, a friendly serif, a sprig, a birch trunk down the edge, and a branch across the top.'},
    nook:{name:'Library',cw:'library',blurb:'A bookshelf (with a cat) across the top, a chapter-list routine with dotted leaders, a ribbon bookmark on your next step, and ribbon tabs.'},
    meadow:{name:'Meadow',cw:'peri',blurb:'A flower garland, blossom bullets, pastel gradient edges, polka-dot paper, and a floating rounded tab bar.'},
    tide:{name:'Ocean',cw:'ocean',blurb:'A rippling pool header, a ripple ring on your next step, a wave along the main card, and a wavy tab bar.'},
    birch:{name:'Canvas',cw:'oak',blurb:'Paper-and-ink calm: canvas texture, a brush-stroke and ensō header, brush-stroke dividers, open-circle step markers, and an ink blot (gold leaf in dark mode) for finished steps.'}
  };
  var CWS={
    sea:{name:'Fern',sw:['#E9EDDF','#3D754F','#A9CC9B']},
    library:{name:'Heirloom',sw:['#E9DFC9','#28496B','#A47552']},
    peri:{name:'Wisteria',sw:['#F1E8D7','#755C9B','#EAB3C2']},
    ocean:{name:'Seaglass',sw:['#EDE5D8','#316E70','#A5CFC7']},
    oak:{name:'Linen',sw:['#F5F0E6','#7E6947','#B5BDB1']}
  };
  var MOTIFS={
    creature:'<path d="M6 25C6 13 12 7 26 7C26 19 18 25 6 25Z"/><path d="M6 25L18 13"/>',
    original:'<path d="M16 29V9"/><path d="M16 21c-5 0-8-3-8-7 5 0 8 3 8 7z"/><path d="M16 15c4 0 7-3 7-7-4 0-7 3-7 7z"/>',
    nook:'<path d="M16 8c-3-2.5-7-3-11-2.5v17c4-.5 8 0 11 2.5 3-2.5 7-3 11-2.5v-17c-4-.5-8 0-11 2.5z"/><path d="M16 8v17"/>',
    meadow:'<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.23 1.00L15.49 1.19L14.41 1.80L13.71 2.64L13.38 3.39L13.29 4.42L13.43 5.12L13.85 6.01L14.36 6.76L14.32 6.85L12.91 5.63L12.12 5.21L11.23 4.98L10.38 4.98L9.49 5.17L8.75 5.54L8.23 6.10L7.86 7.18L7.86 8.02L8.18 8.91L8.65 9.42L9.54 9.94L10.15 10.08L11.13 10.13L12.35 9.89L13.33 9.56L13.61 9.56L13.57 9.66L12.40 10.17L11.46 10.78L10.66 11.62L10.29 12.28L10.06 13.17L10.10 14.01L10.43 14.71L11.04 15.27L11.69 15.51L12.21 15.56L13.05 15.41L13.94 14.99L14.78 14.24L15.16 13.73L15.53 12.98L15.77 12.28L15.86 11.62L15.95 11.48L16.05 11.58L16.05 12.61L15.91 13.64L15.67 14.62L14.64 17.80L14.22 19.86L14.17 22.01L14.64 24.68L14.60 24.73L14.27 24.26L13.15 21.92L12.12 20.70L11.65 20.38L10.90 20.05L9.73 19.77L8.18 19.58L8.89 20.42L10.15 22.62L10.90 23.42L11.98 24.03L13.66 24.49L14.36 25.06L15.02 26.09L15.67 28.10L16.42 29.69L16.80 30.25L17.26 30.72L17.87 31.00L16.51 28.15L15.53 25.06L15.49 24.54L15.58 23.84L16.05 22.48L16.33 22.01L16.84 21.50L17.64 21.22L19.04 21.17L19.74 21.03L20.40 20.80L21.20 20.33L22.08 19.49L23.11 17.76L23.63 17.10L24.14 16.63L22.08 16.77L20.63 17.01L19.56 17.38L18.90 17.71L17.73 18.60L17.12 19.39L16.66 20.33L16.47 20.94L15.67 22.34L15.25 23.56L15.02 22.48L14.97 20.56L15.44 17.80L16.28 14.95L16.42 14.06L16.51 13.96L16.89 14.62L17.36 15.13L17.87 15.41L18.57 15.56L19.32 15.46L20.07 15.09L20.59 14.53L20.87 13.96L20.96 13.59L20.96 12.70L20.77 12.05L20.45 11.44L19.70 10.64L18.15 9.71L18.39 9.66L19.46 10.03L20.63 10.22L21.52 10.17L22.41 9.94L23.07 9.56L23.63 9.00L23.86 8.63L24.14 7.79L24.14 6.99L23.86 6.15L23.35 5.49L22.60 5.02L21.80 4.84L20.73 4.88L19.56 5.26L18.48 5.96L17.50 6.94L17.45 6.85L17.59 6.57L18.53 5.31L18.95 4.37L19.04 3.90L19.00 2.73L18.62 1.84L18.15 1.37L17.36 1.05ZM15.72 7.60L16.23 7.60L16.56 7.74L16.89 8.07L17.08 8.49L17.08 8.86L16.89 9.33L16.33 9.75L15.86 9.80L15.44 9.66L15.06 9.33L14.88 8.96L14.88 8.44L15.02 8.11L15.25 7.83Z"/>',
    tide:'<path d="M3 12c3-3 5-3 8 0s5 3 8 0 5-3 8 0"/><path d="M3 19c3-3 5-3 8 0s5 3 8 0 5-3 8 0"/><path d="M3 26c3-3 5-3 8 0s5 3 8 0 5-3 8 0"/>',
    birch:'<path d="M26.5 3C18 3.5 12 8.5 11 16.5L9.5 21.5l5.5-1.8C22.5 18.5 27 12 26.5 3z"/><path d="M2.5 30L20 11.5"/><path d="M13 17.5l5-.9M15.5 13.5l5-1.2"/>'
  };
  var SVGO='<svg class="sprig" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  var QUILL='<span class="inkart quill"></span><img class="goldart quill" src="art/quill-gold.png" alt="" width="300" height="332">';

  /* ---- menu-button emblems: a frame plus a motif from the same craft, one per theme ---- */
  function f2(n){return Math.round(n*100)/100}
  function blobPath(cx,cy,r,amp,bumps,seed){var d='',n=72;for(var i=0;i<=n;i++){var a=i/n*Math.PI*2,rr=r+amp*Math.sin(a*bumps+seed)+amp*.55*Math.sin(a*(bumps+3)+seed*2.3)+amp*.35*Math.sin(a*2+seed*.7);d+=(i?'L':'M')+f2(cx+rr*Math.cos(a))+' '+f2(cy+rr*Math.sin(a))}return d+'Z'}
  function leafAt(x,y,ang,len,w,fill,stroke){return '<path transform="translate('+f2(x)+' '+f2(y)+') rotate('+f2(ang)+')" d="M0 0C'+f2(len*.3)+' '+f2(-w)+' '+f2(len*.75)+' '+f2(-w)+' '+f2(len)+' 0C'+f2(len*.75)+' '+f2(w)+' '+f2(len*.3)+' '+f2(w)+' 0 0Z" style="fill:'+fill+';stroke:'+stroke+';stroke-width:.7"/>'}
  var EMBS={
    original:function(){
      var s='<circle cx="24" cy="24" r="19.5" style="fill:var(--surface)"/><circle cx="24" cy="24" r="19.5" fill="none" style="stroke:var(--accent);stroke-width:1.1;opacity:.75"/>';
      for(var i=0;i<16;i++){var a=i/16*360-80,rad=a*Math.PI/180,x=24+19.5*Math.cos(rad),y=24+19.5*Math.sin(rad),out=i%2?1:-1;
        s+=leafAt(x,y,a+90+out*38,6.4,2.3,i%3?'color-mix(in srgb,var(--accent) 30%,var(--surface))':'color-mix(in srgb,var(--accent) 62%,var(--surface))','var(--accent)')}
      return s+'<g transform="translate(9.6 9.2) scale(.9)" fill="none" style="stroke:var(--accent)" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+MOTIFS.original+'</g>';
    },
    nook:function(){
      var s='<path d="'+blobPath(24.4,25.2,19.5,1.25,7,1.3)+'" style="fill:color-mix(in srgb,var(--accent) 70%,#000)" opacity=".55"/>';
      s+='<path d="'+blobPath(24,24,19.5,1.25,7,1.3)+'" style="fill:var(--accent)"/>';
      s+='<path d="M41 33c2.6 1.2 3.4 4 1.6 5.4-1.6 1.2-3.6-.4-3.2-2.6" style="fill:var(--accent)"/>';
      s+='<circle cx="24" cy="24" r="14.2" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="1.6"/><circle cx="24" cy="24" r="14.2" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width=".8" transform="translate(-.6 -.6)"/>';
      s+='<path d="M11 15c3-5 8-7.5 13-7.5" fill="none" stroke="#fff" stroke-opacity=".38" stroke-width="2" stroke-linecap="round"/>';
      return s+'<g transform="translate(13.6 13.4) scale(.66)" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" ><g transform="translate(.8 .8)">'+MOTIFS.nook+'</g></g><g transform="translate(13.6 13.4) scale(.66)" fill="none" style="stroke:var(--surface)" stroke-opacity=".92" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">'+MOTIFS.nook+'</g>';
    },
    meadow:function(){
      var s='';for(var i=0;i<8;i++){var a=i*45+10;s+='<ellipse cx="24" cy="12.6" rx="6.6" ry="10" transform="rotate('+a+' 24 24)" style="fill:color-mix(in srgb,var(--accent) 22%,var(--surface));stroke:var(--accent);stroke-width:.9"/>'}
      for(var j=0;j<8;j++){var b=j*45+10;s+='<path d="M24 6.5v8" transform="rotate('+b+' 24 24)" style="stroke:var(--accent)" stroke-width=".6" stroke-linecap="round" opacity=".45"/>'}
      s+='<circle cx="24" cy="24" r="7.2" style="fill:var(--accent)"/>';
      for(var k=0;k<7;k++){var cr=k/7*Math.PI*2;s+='<circle cx="'+f2(24+3.9*Math.cos(cr))+'" cy="'+f2(24+3.9*Math.sin(cr))+'" r=".95" style="fill:var(--surface)" opacity=".85"/>'}
      return s+'<circle cx="24" cy="24" r="1.3" style="fill:var(--surface)"/>';
    },
    tide:function(){
      var s='<ellipse cx="24" cy="24" rx="22.6" ry="21.6" fill="none" style="stroke:var(--sky,var(--accent))" stroke-width=".9" opacity=".55"/>';
      s+='<path d="'+blobPath(24,24.4,18.8,1.1,3,2.1)+'" style="fill:color-mix(in srgb,var(--sky,var(--accent)) 55%,var(--surface))" />';
      s+='<path d="'+blobPath(24,24.4,18.8,1.1,3,2.1)+'" fill="none" style="stroke:var(--accent)" stroke-width="1" opacity=".6"/>';
      s+='<path d="M12.5 17.5c2.5-5 7.5-8 13-8" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.2" stroke-linecap="round"/><circle cx="33.5" cy="14.5" r="1.3" fill="#fff" fill-opacity=".65"/>';
      return s+'<g transform="translate(13.2 12.8) scale(.68)" fill="none" style="stroke:var(--accent)" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">'+MOTIFS.tide+'</g>';
    },
    creature:function(){
      var se=curSeason(),s='<circle cx="24" cy="24" r="16.2" style="fill:var(--surface)"/>';
      for(var i=0;i<10;i++){var a=i/10*Math.PI*2-Math.PI/2,x=24+20.2*Math.cos(a),y=24+20.2*Math.sin(a),deg=a*180/Math.PI;
        if(se==='spring'){for(var p=0;p<5;p++){var pa=p/5*Math.PI*2+i;s+='<circle cx="'+f2(x+1.7*Math.cos(pa))+'" cy="'+f2(y+1.7*Math.sin(pa))+'" r="1.45" fill="#F2B8C6" stroke="#C97A8E" stroke-width=".35"/>'}s+='<circle cx="'+f2(x)+'" cy="'+f2(y)+'" r=".9" fill="#F4C95D"/>'}
        else if(se==='summer')s+=leafAt(x-2.6*Math.cos(a+1.2),y-2.6*Math.sin(a+1.2),deg+(i%2?60:120),5.6,2.1,i%2?'#8DBF6A':'#5E9A4B','#3F6B34');
        else if(se==='autumn'){s+='<g transform="translate('+f2(x)+' '+f2(y)+') rotate('+f2(deg+90+(i%2?18:-18))+')"><ellipse cx="0" cy="1" rx="2.3" ry="2.8" fill="#B27A40" stroke="#6E4520" stroke-width=".45"/><path d="M-2.8 -.6C-2.6 -3 2.6 -3 2.8 -.6Z" fill="#7A5230" stroke="#4E321A" stroke-width=".45"/><path d="M0 -2.6v-1.2" stroke="#4E321A" stroke-width=".6" stroke-linecap="round"/></g>'}
        else{s+='<g transform="translate('+f2(x)+' '+f2(y)+') rotate('+(i*17)+')" stroke="#7FA6C9" stroke-width=".7" stroke-linecap="round"><path d="M0 -2.6V2.6M-2.25 -1.3L2.25 1.3M-2.25 1.3L2.25 -1.3"/></g>'}}
      s+='<filter id="embstamp" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="1.6"/></filter>';
      return s+'<g filter="url(#embstamp)" style="fill:var(--accent)"><ellipse cx="24" cy="28.4" rx="6.3" ry="5.2"/><ellipse cx="16.6" cy="21.2" rx="2.4" ry="2.9" transform="rotate(-18 16.6 21.2)"/><ellipse cx="21.2" cy="17" rx="2.4" ry="3" transform="rotate(-6 21.2 17)"/><ellipse cx="26.8" cy="17" rx="2.4" ry="3" transform="rotate(6 26.8 17)"/><ellipse cx="31.4" cy="21.2" rx="2.4" ry="2.9" transform="rotate(18 31.4 21.2)"/></g>';
    }
  };
  function emblemSvg(k){if(k==='creature')return '<span class="seal orig" aria-hidden="true"><i class="ob" style="-webkit-mask-image:url(art/wood-'+curSeason()+'.png);mask-image:url(art/wood-'+curSeason()+'.png)"></i></span>';if(k==='tide')return '<span class="seal orig" aria-hidden="true"><i class="ob tg"></i></span>';if(k==='original')return '<span class="seal orig" aria-hidden="true"><i class="ob"></i></span>';if(k==='nook')return '<span class="seal lib" aria-hidden="true"><i class="lb"></i><i class="lh"></i></span>';if(k==='meadow')return '<span class="seal orig" aria-hidden="true"><i class="ob md"></i></span>';return '<svg class="embsvg" viewBox="0 0 48 48" aria-hidden="true">'+EMBS[k]()+'</svg>'}
  function motif(){var k=lookKey();if(k==='birch')return QUILL;if(k==='creature')return SVGO+LOGICS.mammal.icon+'</svg>';return SVGO+(MOTIFS[k]||MOTIFS.original)+'</svg>'}

  /* header illustrations, drawn with the colorway's own tokens */

  /* extra animals per mood; the scene shows one a day, and tapping the scene brings the next */
  var WHO={slow:['sleepy bear','slow turtle','little snail'],energetic:['busy squirrel','bouncy rabbit','springy grasshopper'],dreamy:['little songbird','leaping dolphin','dreamy butterfly'],balanced:['little hedgehog','clever fox','quiet deer']};
  function bearFirst(){var d=new Date(),doy=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);S.cr=(3-doy%3)%3}
  function critterIdx(){var d=new Date(),doy=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5);return (doy+(S.cr||0))%3}

  /* storybook hedgehog: soft gradients, many fine spines, warm face, adventure gear */
  function HEDGEHOG(){
    var o='fill="none" stroke="var(--ink)" stroke-opacity=".55" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"';
    var ol='stroke="var(--ink)" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round"';
    var g='<ellipse cx="348" cy="78" rx="50" ry="3.6" style="fill:var(--ink)" opacity=".13"/>';
    // grass tufts
    [[288,0],[292,3]].forEach(function(t){g+='<path d="M'+t[0]+' 78C'+t[0]+' 72 '+(t[0]+2)+' 70 '+(t[0]+3)+' '+(68+t[1])+'" '+o+' stroke="var(--accent)" stroke-opacity=".8"/>'});
    // walking stick
    g+='<path d="M298 78L304 32" fill="none" stroke="#4F3523" stroke-width="2.6" stroke-linecap="round"/><path d="M298 78L304 32" fill="none" stroke="#8A6544" stroke-width="1.2" stroke-linecap="round"/><circle cx="304.5" cy="30.5" r="3" style="fill:#8A6544" '+ol+'/><path d="M302 36Q297 37 296 42Q300 40 303 40Z" style="fill:var(--accent)" '+ol+'/>';
    // body
    g+='<path d="M300 78C298 52 320 37 348 38C376 39 392 56 388 78Z" fill="url(#gBody)" '+ol+'/>';
    // spines: two layers, darker underneath then lighter tips
    var cx=345,cy=80,rx=45,ry=41,i,a,x,y,nx,ny,L,d='',d2='';
    for(i=0;i<44;i++){
      a=Math.PI*(1.09+0.82*i/43);
      x=cx+Math.cos(a)*rx;y=cy+Math.sin(a)*ry;
      nx=Math.cos(a);ny=Math.sin(a)*0.9;L=6+((i*7)%5)*1.6;
      var tx=x+nx*L+Math.sin(i*2.3)*1.2,ty=y+ny*L;
      d+='M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+tx.toFixed(1)+' '+ty.toFixed(1);
      if(i%2===0){var bx=x+nx*(L*0.45),by=y+ny*(L*0.45);d2+='M'+bx.toFixed(1)+' '+by.toFixed(1)+'L'+(tx+nx*1.5).toFixed(1)+' '+(ty+ny*1.5).toFixed(1)}
    }
    g+='<path d="'+d+'" fill="none" stroke="#4A2F1D" stroke-width="1.9" stroke-linecap="round"/><path d="'+d2+'" fill="none" stroke="#C9A27A" stroke-width="1" stroke-linecap="round" opacity=".9"/>';
    // inner spine shading on the back
    g+='<path d="M312 66C322 50 346 46 366 52" '+o+' stroke="#fff" stroke-opacity=".25" stroke-width="2.4"/>';
    // backpack + bedroll
    g+='<rect x="324" y="52" width="23" height="20" rx="6" fill="url(#gAccent)" '+ol+'/><path d="M327 60H344" '+o+'/><rect x="332" y="62" width="7" height="5" rx="1.6" style="fill:#E8D5B5" '+ol+'/>';
    g+='<ellipse cx="335" cy="50.5" rx="13" ry="4.4" style="fill:#C9A66B" '+ol+'/><path d="M328 47V54M342 47V54" '+o+'/>';
    // strap across the body
    g+='<path d="M347 56C358 58 366 66 370 76" '+o+' stroke="var(--accent)" stroke-opacity=".95" stroke-width="2.2"/>';
    // face
    g+='<path d="M374 66C384 58 398 62 410 74C410 78 402 79 392 79L376 79Z" fill="url(#gCream)" '+ol+'/>';
    g+='<ellipse cx="409" cy="73.6" rx="2.3" ry="1.9" style="fill:#2B211C"/><circle cx="397" cy="68.6" r="2" style="fill:#2B211C"/><circle cx="397.6" cy="68" r=".7" style="fill:#fff"/>';
    g+='<circle cx="392" cy="73" r="3.2" style="fill:#E58E86" opacity=".45"/><path d="M402 77Q406 78.4 409 76.4" '+o+' stroke-width=".9"/>';
    g+='<circle cx="381" cy="62" r="4.6" style="fill:#8E6240" '+ol+'/><circle cx="381.4" cy="62.4" r="2.4" style="fill:#E8B5A5"/>';
    // little hat with a feather
    g+='<ellipse cx="388" cy="56.5" rx="12" ry="3.2" style="fill:var(--accent)" '+ol+'/><path d="M379 56C379 47 397 47 397 56Z" fill="url(#gAccent)" '+ol+'/><path d="M379.6 53.4Q388 55.6 396.4 53.4" '+o+' stroke="#fff" stroke-opacity=".4"/>';
    g+='<path d="M394 51C400 44 404 41 410 40C406 44 403 48 397 53Z" style="fill:var(--hot)" '+ol+'/>';
    // paws
    g+='<ellipse cx="372" cy="78" rx="6" ry="2.6" style="fill:#E8D5B5" '+ol+'/><ellipse cx="392" cy="78.4" rx="5.4" ry="2.4" style="fill:#E8D5B5" '+ol+'/>';
    return g;
  }
  var CRITTERS={
    slow:[
      function(f,o){ // turtle
        return '<ellipse cx="318" cy="76" rx="8" ry="4" style="fill:var(--sky)" '+f+'/><ellipse cx="368" cy="76" rx="8" ry="4" style="fill:var(--sky)" '+f+'/>'
          +'<path d="M300 76C300 52 322 44 346 44C370 44 388 54 388 76Z" style="fill:var(--accent)" '+f+'/><path d="M316 76C316 62 328 54 346 54M346 54C364 54 374 62 374 76M346 44V76" '+o+' opacity=".55"/>'
          +'<ellipse cx="398" cy="66" rx="10" ry="8" style="fill:var(--sky)" '+f+'/><path d="M396 64Q400 67 404 64" '+o+'/>'
          +'<text x="410" y="48" font-size="12" style="fill:var(--ink2);font-family:var(--font-display)">z</text>';
      },
      function(f,o){ // snail
        return '<path d="M298 78C298 71 306 69 320 69L372 69C384 69 392 60 392 48C392 43 399 43 399 50C401 66 399 78 386 78Z" style="fill:var(--sky)" '+f+'/>'
          +'<path d="M392 46L390 36M398 47L402 37" '+o+'/><circle cx="390" cy="35" r="2" style="fill:var(--ink)"/><circle cx="402" cy="36" r="2" style="fill:var(--ink)"/>'
          +'<circle cx="340" cy="54" r="17" style="fill:var(--wood)" '+f+'/><path d="M340 54m0-1a1 1 0 1 1-1 1M340 54m-1 0a9 9 0 1 1 9 9M340 54m0 0a5 5 0 1 0-5-5" '+o+' opacity=".7"/>';
      }
    ],
    energetic:[
      function(f,o){ // rabbit
        return '<ellipse cx="340" cy="70" rx="12" ry="8" style="fill:var(--surface2)" '+f+'/><ellipse cx="352" cy="62" rx="22" ry="14" style="fill:var(--surface2)" '+f+'/>'
          +'<circle cx="326" cy="68" r="5" style="fill:var(--surface)" '+f+'/>'
          +'<ellipse cx="376" cy="28" rx="3.8" ry="12" transform="rotate(-8 376 28)" style="fill:var(--surface2)" '+f+'/><ellipse cx="387" cy="29" rx="3.8" ry="12" transform="rotate(8 387 29)" style="fill:var(--surface2)" '+f+'/>'
          +'<circle cx="380" cy="50" r="11" style="fill:var(--surface2)" '+f+'/><circle cx="384" cy="48" r="1.6" style="fill:var(--ink)"/><circle cx="390" cy="53" r="2" style="fill:var(--accent)"/>'
          +'<path d="M392 66L402 62L398 74Z" style="fill:var(--accent)" '+f+'/><path d="M398 62L401 55" '+o+'/>';
      },
      function(f,o){ // grasshopper
        return '<ellipse cx="350" cy="56" rx="24" ry="7" transform="rotate(-8 350 56)" style="fill:var(--accent)" '+f+'/><ellipse cx="346" cy="51" rx="19" ry="4" transform="rotate(-8 346 51)" style="fill:var(--sky)" '+f+'/>'
          +'<circle cx="378" cy="50" r="6.5" style="fill:var(--accent)" '+f+'/><circle cx="381" cy="48" r="1.6" style="fill:var(--ink)"/><path d="M381 44L394 28M383 44L400 36" '+o+'/>'
          +'<path d="M336 58L324 38L304 70M340 62L336 78M360 62L364 78M366 60L374 78" '+o+'/>';
      }
    ],
    dreamy:[
      function(f,o){ // dolphin leaping
        return '<path d="M276 78q8-6 16 0t16 0M372 78q8-6 16 0t16 0" '+o+' opacity=".6"/>'
          +'<path d="M298 76C312 34 352 22 390 44L406 50L392 57C374 50 332 52 312 80Z" style="fill:var(--sky)" '+f+'/>'
          +'<path d="M334 40L344 25L354 38Z" style="fill:var(--sky)" '+f+'/><path d="M374 52L368 65L382 58Z" style="fill:var(--sky)" '+f+'/>'
          +'<path d="M298 76L284 69M298 76L289 85" '+o+'/><circle cx="385" cy="46" r="1.7" style="fill:var(--ink)"/><path d="M392 52Q398 54 403 51" '+o+' stroke-width="1"/>';
      },
      function(f,o){ // butterfly on a flower
        return '<path d="M392 78V46" '+o+'/><circle cx="392" cy="43" r="5" style="fill:var(--soft)" '+f+'/><circle cx="392" cy="43" r="2" style="fill:var(--wood)"/>'
          +'<ellipse cx="338" cy="42" rx="15" ry="10" transform="rotate(-28 338 42)" style="fill:var(--accent)" '+f+'/><ellipse cx="372" cy="42" rx="15" ry="10" transform="rotate(28 372 42)" style="fill:var(--accent)" '+f+'/>'
          +'<ellipse cx="344" cy="58" rx="9" ry="7" transform="rotate(22 344 58)" style="fill:var(--soft)" '+f+'/><ellipse cx="366" cy="58" rx="9" ry="7" transform="rotate(-22 366 58)" style="fill:var(--soft)" '+f+'/>'
          +'<path d="M355 38V64" '+o+' stroke-width="3"/><path d="M355 38L349 27M355 38L361 27" '+o+'/>';
      }
    ],
    balanced:[
      function(f,o){ // fox with a scarf
        return '<path d="M332 64C306 66 296 48 304 34C316 40 326 50 334 58Z" style="fill:#D9773A" '+f+'/><path d="M304 34C309 36 313 40 315 45L305 45Z" style="fill:var(--surface)" '+f+'/>'
          +'<ellipse cx="352" cy="64" rx="22" ry="12" style="fill:#D9773A" '+f+'/><path d="M342 76V78M362 76V78" '+o+'/>'
          +'<path d="M368 52L371 32L380 41L389 32L392 52C392 62 372 64 368 52Z" style="fill:#D9773A" '+f+'/><path d="M372 52L380 62L388 52Z" style="fill:var(--surface)" '+f+'/>'
          +'<circle cx="376" cy="47" r="1.4" style="fill:var(--ink)"/><circle cx="385" cy="47" r="1.4" style="fill:var(--ink)"/><circle cx="380.5" cy="58" r="1.8" style="fill:var(--ink)"/>'
          +'<path d="M366 62Q380 70 394 62" fill="none" style="stroke:var(--accent)" stroke-width="5" stroke-linecap="round"/>';
      },
      function(f,o){ // deer
        return '<ellipse cx="346" cy="58" rx="22" ry="11" style="fill:var(--wood)" '+f+'/><circle cx="338" cy="55" r="2" style="fill:var(--surface)"/><circle cx="350" cy="52" r="2" style="fill:var(--surface)"/><circle cx="356" cy="60" r="2" style="fill:var(--surface)"/>'
          +'<path d="M330 66V78M338 66V78M356 66V78M364 66V78" '+o+' stroke-width="3"/><path d="M324 52L320 46" '+o+' stroke-width="3"/>'
          +'<path d="M362 50L376 34" '+o+' stroke-width="9"/><path d="M362 50L376 34" fill="none" style="stroke:var(--wood)" stroke-width="6" stroke-linecap="round"/>'
          +'<ellipse cx="382" cy="31" rx="9" ry="5.5" transform="rotate(-25 382 31)" style="fill:var(--wood)" '+f+'/><circle cx="385" cy="29" r="1.4" style="fill:var(--ink)"/><circle cx="390" cy="34" r="1.8" style="fill:var(--ink)"/>'
          +'<ellipse cx="376" cy="24" rx="2.5" ry="5" transform="rotate(-20 376 24)" style="fill:var(--wood)" '+f+'/>'
          +'<path d="M380 24L376 12M377 16L370 10M384 24L388 12M387 16L394 12" '+o+'/>';
      }
    ]
  };
  var DECO={
    creature:function(){
      var o='fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
      var se=curSeason(),m=S.mood,s='';
      s+='<path d="M0 78H440" '+o+' opacity=".5"/>';
      // season props, left side
      if(se==='spring'){
        s+='<path d="M14 78C14 62 22 54 34 50" '+o+'/><path d="M34 50C26 44 28 36 38 36C40 44 38 48 34 50Z" style="fill:var(--accent)" '+o.replace('fill="none" ','')+'/>';
        [[56,60],[78,66]].forEach(function(p){s+='<path d="M'+p[0]+' 78V'+p[1]+'" '+o+'/><circle cx="'+p[0]+'" cy="'+(p[1]-3)+'" r="5" style="fill:var(--soft)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="'+p[0]+'" cy="'+(p[1]-3)+'" r="1.8" style="fill:var(--wood)"/>'});
        s+='<path d="M100 22C104 18 110 18 112 22C108 26 103 26 100 22Z M126 34C130 30 136 30 138 34C134 38 129 38 126 34Z" style="fill:var(--sky)" stroke="var(--ink)" stroke-width="1.2"/>';
      }else if(se==='summer'){
        s+='<circle cx="40" cy="26" r="11" style="fill:var(--accent)" stroke="var(--ink)" stroke-width="1.5"/>';
        for(var i=0;i<8;i++){var a=i*Math.PI/4;s+='<path d="M'+(40+Math.cos(a)*15).toFixed(1)+' '+(26+Math.sin(a)*15).toFixed(1)+'L'+(40+Math.cos(a)*20).toFixed(1)+' '+(26+Math.sin(a)*20).toFixed(1)+'" '+o+'/>'}
        [[70,0],[78,6],[86,2],[110,4],[118,8]].forEach(function(g){s+='<path d="M'+g[0]+' 78C'+g[0]+' 66 '+(g[0]+3)+' 62 '+(g[0]+5)+' '+(58+g[1])+'" '+o+'/>'});
        s+='<ellipse cx="150" cy="73" rx="9" ry="5" style="fill:var(--sky)" stroke="var(--ink)" stroke-width="1.3"/>';
      }else if(se==='autumn'){
        s+='<path d="M20 78C20 66 24 62 38 62C52 62 56 66 56 78Z" style="fill:var(--accent)" stroke="var(--ink)" stroke-width="1.5"/><path d="M30 78V70C30 68 46 68 46 70V78" style="fill:var(--surface)" stroke="var(--ink)" stroke-width="1.3"/><circle cx="30" cy="68" r="1.6" style="fill:var(--surface)"/><circle cx="42" cy="66" r="1.6" style="fill:var(--surface)"/>';
        [[90,20,-20],[120,40,15],[150,16,40],[176,48,-30]].forEach(function(l){s+='<path d="M0 0C6 -9 16 -9 20 0C14 8 6 8 0 0Z" transform="translate('+l[0]+' '+l[1]+') rotate('+l[2]+')" style="fill:var(--accent);opacity:.85" stroke="var(--ink)" stroke-width="1.2"/>'});
        s+='<path d="M96 78C96 70 104 66 112 66C120 66 124 72 124 78Z" style="fill:var(--wood)" stroke="var(--ink)" stroke-width="1.3"/>';
      }else{
        s+='<path d="M30 78V62M30 62L16 74H44ZM30 48L18 62H42ZM30 34L20 48H40Z" style="fill:var(--accent);opacity:.9" stroke="var(--ink)" stroke-width="1.4"/><path d="M20 48H40L36 44H24Z" style="fill:var(--surface)"/>';
        [[80,14],[106,32],[132,18],[160,40],[188,22]].forEach(function(f){s+='<path d="M'+f[0]+' '+(f[1]-5)+'V'+(f[1]+5)+'M'+(f[0]-5)+' '+f[1]+'H'+(f[0]+5)+'M'+(f[0]-3.5)+' '+(f[1]-3.5)+'L'+(f[0]+3.5)+' '+(f[1]+3.5)+'M'+(f[0]+3.5)+' '+(f[1]-3.5)+'L'+(f[0]-3.5)+' '+(f[1]+3.5)+'" '+o+'/>'});
        s+='<path d="M70 78C70 72 76 70 84 70C92 70 96 72 96 78Z" style="fill:var(--surface)" stroke="var(--ink)" stroke-width="1.3"/>';
      }
      // the animal, right side
      var f='stroke="var(--ink)" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"';
      var v=critterIdx();s+='<g transform="translate(440 78) scale(1.3) translate(-440 -78)" filter="url(#gWob)">';
      var artFox=(m==='balanced'&&v===1&&(se==='autumn'||se==='winter')),artDeer=(m==='balanced'&&v===2),artHog=(m==='balanced'&&v===0);
      if(artFox||artDeer||artHog){}else if(v>0&&CRITTERS[m]&&CRITTERS[m][v-1]){s+=CRITTERS[m][v-1](f,o)}else if(m==='slow'){ // sleepy bear in a scarf
        s+='<path d="M300 78C300 54 318 46 342 46C368 46 386 58 386 78Z" style="fill:var(--wood)" '+f+'/>';
        s+='<circle cx="364" cy="56" r="17" style="fill:var(--wood)" '+f+'/><circle cx="351" cy="42" r="6" style="fill:var(--wood)" '+f+'/><circle cx="377" cy="42" r="6" style="fill:var(--wood)" '+f+'/>';
        s+='<ellipse cx="369" cy="62" rx="9" ry="6.5" style="fill:var(--surface2)" '+f+'/><ellipse cx="371" cy="59.5" rx="2.6" ry="1.8" style="fill:var(--ink)"/>';
        s+='<path d="M355 53Q359 56 363 53M372 52Q376 55 380 52" '+o+'/>';
        s+='<path d="M348 66Q364 74 382 70L380 77Q364 81 346 73Z" style="fill:var(--accent)" '+f+'/>';
        s+='<text x="392" y="36" font-size="13" style="fill:var(--ink2);font-family:var(--font-display)">z</text><text x="402" y="26" font-size="10" style="fill:var(--ink2);font-family:var(--font-display)">z</text>';
      }else if(m==='energetic'){ // busy squirrel with an acorn
        s+='<path d="M334 78C300 78 292 44 318 30C312 48 324 56 336 58Z" style="fill:var(--wood)" '+f+'/>';
        s+='<ellipse cx="344" cy="62" rx="14" ry="17" style="fill:var(--wood)" '+f+'/><circle cx="356" cy="42" r="10" style="fill:var(--wood)" '+f+'/><path d="M351 34L349 25L358 31Z" style="fill:var(--wood)" '+f+'/>';
        s+='<circle cx="359" cy="41" r="1.6" style="fill:var(--ink)"/><circle cx="366" cy="45" r="1.6" style="fill:var(--ink)"/><ellipse cx="354" cy="68" rx="8" ry="10" style="fill:var(--surface2)"/>';
        s+='<ellipse cx="370" cy="62" rx="6" ry="7" style="fill:var(--accent)" '+f+'/><path d="M365 57Q370 53 375 57Z" style="fill:var(--ink2)" '+f+'/><path d="M338 78L334 72M352 78L356 72" '+o+'/>';
      }else if(m==='dreamy'){ // songbird on a branch, plus a butterfly
        s+='<path d="M286 52C320 46 360 46 410 42" '+o+'/><path d="M388 43C392 34 400 34 404 38C400 44 394 45 388 43Z" style="fill:var(--accent)" '+f+'/>';
        s+='<ellipse cx="348" cy="36" rx="17" ry="12" style="fill:var(--sky)" '+f+'/><circle cx="364" cy="28" r="8" style="fill:var(--sky)" '+f+'/><path d="M371 27L379 29L371 32Z" style="fill:var(--accent)" '+f+'/><circle cx="366" cy="26" r="1.5" style="fill:var(--ink)"/>';
        s+='<path d="M332 36C322 32 316 36 312 44C322 46 330 44 334 40Z" style="fill:var(--soft)" '+f+'/><path d="M344 36C350 28 358 30 358 38C352 42 346 42 344 36Z" style="fill:var(--accent)" '+f+'/>';
        s+='<path d="M342 48L341 54M352 48L353 54" '+o+'/>';
        s+='<path d="M296 26C290 18 282 22 286 30C290 32 294 30 296 26Z M296 26C302 18 310 22 306 30C302 32 298 30 296 26Z" style="fill:var(--accent);opacity:.85" stroke="var(--ink)" stroke-width="1.2"/><path d="M296 24V32" '+o+'/>';
      }else{ s+=HEDGEHOG(); }
      s+='</g>';
      if(artHog){var HX='x="306" y="12" width="96" height="70" preserveAspectRatio="xMidYMax meet"';s+='<defs><mask id="hogM" style="mask-type:alpha"><image href="art/hedgehog.png" '+HX+'/></mask></defs><image href="art/hedgehog.png" '+HX+'/><rect x="302" y="8" width="104" height="78" mask="url(#hogM)" style="fill:var(--accent);mix-blend-mode:color;opacity:.12"/>'}
      if(artDeer){var DX='x="300" y="-14" width="104" height="96" preserveAspectRatio="xMidYMax meet"';s+='<defs><mask id="deerM" style="mask-type:alpha"><image href="art/deer.png" '+DX+'/></mask></defs><image href="art/deer.png" '+DX+'/><rect x="296" y="-18" width="112" height="104" mask="url(#deerM)" style="fill:var(--accent);mix-blend-mode:color;opacity:.16"/>'}
      if(artFox){var FX='x="312" y="6" width="84" height="76" preserveAspectRatio="xMidYMax meet"';
        if(se==='winter')s+='<image href="art/fox-autumn.png" '+FX+'/>';
        else s+='<defs><mask id="foxScarf" style="mask-type:alpha"><image href="art/fox-w-scarf.png" '+FX+'/></mask></defs><image href="art/fox-w-body.png" '+FX+'/><rect x="306" y="0" width="96" height="86" mask="url(#foxScarf)" style="fill:#9E3B4E"/><image href="art/fox-w-shade.png" '+FX+' opacity=".55"/><image href="art/fox-w-hl.png" '+FX+' opacity=".35"/>';}
      return '<svg viewBox="0 0 440 90" preserveAspectRatio="xMidYMax meet" style="overflow:visible"><defs><linearGradient id="gBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:#B88C5E"/><stop offset=".55" style="stop-color:#8E6240"/><stop offset="1" style="stop-color:#5B3D27"/></linearGradient><linearGradient id="gAccent" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:color-mix(in srgb,var(--accent) 80%,#fff)"/><stop offset="1" style="stop-color:color-mix(in srgb,var(--accent) 78%,#000)"/></linearGradient><linearGradient id="gCream" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:#F3E4C8"/><stop offset="1" style="stop-color:#D9BF98"/></linearGradient><filter id="gWob" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.7"/></filter></defs>'+s+'</svg>';
    },

    nook:function(){
      return '<img class="shelf shelf-l" src="art/library-light.png" alt="" width="1200" height="373"><img class="shelf shelf-d" src="art/library-dark.png" alt="" width="1200" height="368">';
    },
    meadow:function(){if(DECO.g2===undefined)DECO.g2=Math.random()<.5;
      if(DECO.g2)return '<div class="garland g2" role="presentation"><i class="h-leaf"></i><i class="h-cream"></i><i class="h-purp"></i><i class="h-blue"></i><i class="h-pink"></i><i class="h-yel"></i><i class="h-tl"></i><i class="h-td"></i><i class="h-ink"></i></div>';
      return '<div class="garland" role="presentation"><i class="g-leaf"></i><i class="g-small"></i><i class="g-big"></i><i class="g-tl"></i><i class="g-td"></i><i class="g-ink"></i></div>'},
    tide:function(){
      return '<svg class="tidesvg" viewBox="0 0 440 64" role="presentation">'
        +'<path class="wv w1" d="M-110 34 Q-55 12 0 34 T110 34 T220 34 T330 34 T440 34 T550 34 V64 H-110Z" style="fill:var(--sky);opacity:.55"/>'
        +'<path class="wv w2" d="M-110 44 Q-55 26 0 44 T110 44 T220 44 T330 44 T440 44 T550 44 V64 H-110Z" style="fill:var(--sky);opacity:.8"/>'
        +'<path class="wv w3" d="M-110 54 Q-55 40 0 54 T110 54 T220 54 T330 54 T440 54 T550 54 V64 H-110Z" style="fill:var(--accent);opacity:.28"/>'
        +'<g class="bub"><circle cx="60" cy="18" r="13" fill="none" pointer-events="all"/><circle cx="60" cy="18" r="4" fill="none" style="stroke:var(--accent)" stroke-width="1.4"/></g>'
        +'<g class="bub"><circle cx="74" cy="9" r="13" fill="none" pointer-events="all"/><circle cx="74" cy="9" r="2.4" fill="none" style="stroke:var(--accent)" stroke-width="1.2"/></g>'
        +'<g class="bub"><circle cx="250" cy="14" r="13" fill="none" pointer-events="all"/><circle cx="250" cy="14" r="3" fill="none" style="stroke:var(--accent)" stroke-width="1.3"/></g>'
        +'<g class="bub"><circle cx="262" cy="22" r="13" fill="none" pointer-events="all"/><circle cx="262" cy="22" r="1.8" fill="none" style="stroke:var(--accent)" stroke-width="1.1"/></g>'
        +'<g class="bub"><circle cx="372" cy="12" r="13" fill="none" pointer-events="all"/><circle cx="372" cy="12" r="4.5" fill="none" style="stroke:var(--accent)" stroke-width="1.4"/></g>'
        +'</svg>';
    },
    original:function(){return '<div class="vine vlay" aria-hidden="true"><i class="v-light"></i><i class="v-acc"></i><i class="v-mid"></i><i class="v-line"></i></div>'},
    birch:function(){
      return '<span class="inkart wave" role="presentation"></span><img class="goldart wave" src="art/stroke-wave-gold.png" alt="" width="1200" height="98">';
    }
  };
  function deco(){var f=DECO[lookKey()];return f?'<div class="deco" aria-hidden="true"'+(S.logic==='mammal'?' data-a="critter"':'')+'>'+f()+'</div>':''}
  function lotRow(){return '<div class="between" style="justify-content:flex-end;gap:8px"><button class="psign" data-a="lot" aria-label="Open '+esc(U().lot)+'"><b>P</b><span>'+esc(U().lot)+'</span></button></div>'}
  function head(o){
    return '<header class="head"><div class="top"><div>'+(o.eyebrow?'<div class="date">'+esc(o.eyebrow)+'</div>':'')+'<h1 class="hello">'+esc(o.title)+'</h1>'+(o.sub?'<div class="date">'+esc(o.sub)+'</div>':'')+'</div>'
      +(EMBS[lookKey()]?'<button class="emblem fancy" data-a="menu" aria-label="Open menu" aria-haspopup="dialog">'+emblemSvg(lookKey())+'</button>':'<button class="emblem" data-a="menu" aria-label="Open menu" aria-haspopup="dialog">'+motif()+'</button>')+'</div>'+deco()+(o.def&&lookKey()==='nook'?'<p class="defn"><b>with\u00b7y</b> <span class="ipa">/\u02c8w\u026a\u00f0.i/</span> <i>noun</i> &mdash; <b>1.</b>&nbsp;a flexible willow shoot, woven to bind things together. <b>2.</b>&nbsp;<i>(informal)</i> something that bends without breaking.</p>':'')+'</header>';
  }

  var ICON={
    today:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',
    lists:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/></svg>',
    log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
    ov:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16M15 4v16"/></svg>',
    lot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 17V8h3a2.5 2.5 0 0 1 0 5h-3"/></svg>',
    us:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 15c3 0 6 1.5 6 5"/></svg>'
  };
  var STACK='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="9" height="9" rx="2"/><path d="M3 5v8a1 1 0 0 0 1 1h8"/></svg>';
  var CHEV='<svg class="gchev" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5l4 4 4-4"/></svg>';

  /* floor items (floor:true) are the basics, so they have no skip button */
  var STEPS={
    getup:{t:'Get out of bed',s:'Feet on the floor. That is the whole step.',c:'I am up',floor:true},
    dailymeds:{t:'Morning medications',s:'First thing, before anything else.',c:'Taken',floor:true},
    teeth:{t:'Teeth and face',s:'',c:'Done'},
    clothes:{t:'Out of pajamas',s:'',c:'Done'},
    muffin:{t:"§C's breakfast",s:'Feeding §C gets you into the kitchen.',c:'Fed',floor:true},
    water:{t:'A glass of water',s:'Just one, wherever you are.',c:'Done',floor:true},
    meal:{t:'Your turn',s:'§C §is sorted. What are you having?',meal:true,floor:true},
    lunch:{t:'Lunch',s:'§P is usually free around 12:30. Want to eat together?',lunch:true,floor:true},
    jobs:{t:'One small project step',s:'Twenty minutes. Just the starting, not the finishing.',c:'Done'},
    pt:{t:'Stretches or exercises',s:'The smaller round counts if your energy is low.',c:'Done'},
    archery:{t:'Hobby time',s:'Pack your gear first, then go.',c:'Done'},
    muffinpm:{t:"§C's dinner",s:'The evening bowl.',c:'Fed',floor:true},
    kidsam:{t:'Get §K ready for the day',s:'Clothes, teeth, shoes. One small step at a time is plenty.',c:'Ready'},
    checkin:{t:'Check in with §O',s:'A quick text or call counts.',c:'Done'},
    dinner:{t:'Dinner',s:'What sounds doable tonight?',meal:true,floor:true},
    tidy:{t:'One small tidy',s:'Ten minutes, one spot. The kitchen counter is a good one.',c:'Done'},
    tomorrow:{t:'Glance at tomorrow',s:'Just the fixed things, and one easy place to start.',c:'Done'}
  };
  var NAMES={getup:'Get out of bed',dailymeds:'Morning medications',teeth:'Teeth and face',clothes:'Out of pajamas',muffin:"§C's breakfast",kidsam:'Get §K ready',checkin:'Check in with §O',water:'Water',meal:'Breakfast',lunch:'Lunch',jobs:'One small project step',pt:'Stretches or exercises',archery:'Archery, 3 PM',muffinpm:"§C's dinner",dinner:'Dinner',tidy:'One small tidy',tomorrow:'Glance at tomorrow'};
  var PARTS={
    morning:{label:'Morning',steps:['getup','teeth','clothes','muffin','kidsam','meal'],done:{t:'The basics are covered.',s:'Everything after this is a bonus. Pick some music, or see what the day wants.'}},
    afternoon:{label:'Afternoon',steps:['lunch','jobs','pt'],done:{t:'Afternoon handled.',s:'Whatever happened, the afternoon is done. Evening is its own thing.'}},
    evening:{label:'Evening',steps:['muffinpm','dinner','tidy','checkin','tomorrow'],done:{t:'That is the day.',s:'Rest counts. Nothing carries over as overdue.'}}
  };
  var FLOORALL={morning:['getup','dailymeds','teeth','clothes','muffin','kidsam','water','meal'],afternoon:['lunch','jobs','pt'],evening:['muffinpm','checkin','dinner','tidy','tomorrow']};
  var FLOORDEF=['getup','dailymeds','muffin','water','meal','lunch','muffinpm','dinner'];
  var BASE_CHIPS=['Migraine','Rough day','Slept badly','Went to the gym','Watered plants'];
  /* tile groups: a chip that opens a panel of more options. Migraine is the first one; more can be added later. */
  var GROUPS={Migraine:{title:'Migraine details'}};
  var SEVS=['Mild','Moderate','Severe'];
  var SEVCOL={Mild:'var(--c6)',Moderate:'var(--c1)',Severe:'var(--c5)'};
  var KINDS={meds:{label:'Medications taken',add:'Add a medication',store:'gs-meds'},trig:{label:'Possible triggers',add:'Add a trigger',store:'gs-trig'},symp:{label:'Symptoms',add:'Add a symptom',store:'gs-symp'}};
  var DOW=['S','M','T','W','T','F','S'];

  function load(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
  function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}try{if(!localStorage.getItem('gs-tour-snap'))window.GSSync&&window.GSSync.touch(k)}catch(e){}}
  /* personal names are filled in at display time, so none of them live in the code */
  var PROF=(function(){try{return JSON.parse(localStorage.getItem('gs-profile'))}catch(e){return null}})();
  function fxWith(s,html){
    s=String(s).replace(/§is/g,(PROF&&PROF.pets&&PROF.pets.length>1)?'are':'is');
    var p=PROF||{},dflt={'§N':'friend','§P':'your partner','§C':'your pet','§K':'the kids','§O':'someone you love'},val={'§N':p.name,'§P':p.partner,'§C':p.pet,'§K':joinNames(p.kids||[]),'§O':joinNames(p.others||[])};
    return String(s).replace(/(^|[.!?>] ?)?(§[NPCKO])/g,function(m,pre,tok){
      var w=(val[tok]||'').trim(),fb=!w;if(fb)w=dflt[tok];
      if(fb&&(pre!==undefined)&&pre!==''){w=w.charAt(0).toUpperCase()+w.slice(1)}else if(fb&&pre===undefined&&false){}
      return (pre||'')+(html?esc(w):w);
    });
  }
  function fx(s){return fxWith(s,true)}
  function fxt(s){return fxWith(s,false)}
  function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML.replace(/"/g,'&quot;').replace(/'/g,'&#39;')}

  var DEFAULT_LISTS=[
    {id:'books',name:'Books to read',items:[{t:'Book club pick (sample item)',done:false},{t:'A good mystery (sample item)',done:false},{t:'Try a recipe from the library cookbook (sample item)',done:false,parked:true,tid:'t10'}]},
    {id:'groc',name:'Groceries',items:[{t:'Oat milk (sample item)',done:false},{t:'Eggs (sample item)',done:false},{t:'Bananas (sample item)',done:true},{t:'Coffee (sample item)',done:false},{t:'Easy breakfast foods (sample item)',done:false},{t:'Something for dinner Thursday (sample item)',done:false}]},
    {id:'gifts',name:'Gift ideas',items:[{t:'Cozy socks (sample item)',done:false},{t:'A plant for a new apartment (sample item)',done:false},{t:'A nice notebook (sample item)',done:false}]},
    {id:'movies',name:'Movies to watch',items:[{t:'Something cozy for a rainy day (sample item)',done:false},{t:'The one everyone keeps recommending (sample item)',done:false},{t:'A classic you have never seen (sample item)',done:false,parked:true,tid:'t13'}]},
    {id:'places',name:'Places to try',items:[{t:'The new ramen place (sample item)',done:false,parked:true,tid:'t11'},{t:'Botanical garden (sample item)',done:false},{t:'Weekend farmers market (sample item)',done:false}]}
  ];
  var S={tab:'today',part:'morning',status:{},lists:load('gs-lists',DEFAULT_LISTS),log:load('gs-log',[]),custom:load('gs-custom',[]),
    colors:load('gs-colors',{}),hide:{},mo:0,day:null,lv:'everyday',filt:false,rp:null,menu:false,
    opts:{meds:load('gs-meds',[]),trig:load('gs-trig',['Poor sleep','Skipped a meal','Dehydration','Weather change','Stress','Bright light']),symp:load('gs-symp',['Aura','Nausea','Light sensitivity','Sound sensitivity','Brain fog','Neck tension'])},
    f:{sels:[],td:{}}};
  BASE_CHIPS.forEach(function(c,i){if(S.colors[c]===undefined)S.colors[c]=i});
  /* health trackers: things the person names themselves (migraine, flare, pain day). Up to three.
     Someone set up before trackers existed keeps Migraine; a brand-new person starts with none. */
  S.trk=load('gs-trk',null);if(!Array.isArray(S.trk))S.trk=PROF?[{id:'mig',name:'Migraine'}]:[];
  function trkById(id){for(var i=0;i<S.trk.length;i++)if(S.trk[i].id===id)return S.trk[i];return null}
  function trkNames(){return S.trk.map(function(t){return t.name})}
  function entTrk(en){var id=en.trk||(en.label==='Migraine'?'mig':null);return id&&trkById(id)?id:null}
  function saveTrk(){save('gs-trk',S.trk);if(S.stacks)syncTrkStacks()}
  function addTrk(name){var t={id:'h'+Date.now().toString(36),name:String(name).trim().slice(0,30)};S.trk.push(t);saveTrk();return t}
  function setTrk(names){
    var seen={};names=names.map(function(x){return x.trim().slice(0,30)}).filter(function(x){var k=x.toLowerCase();if(!x||seen[k])return false;seen[k]=1;return true}).slice(0,3);
    names.forEach(function(n,i){if(S.trk[i])S.trk[i].name=n;else S.trk.push({id:'h'+(Date.now()+i).toString(36),name:n})});
    S.trk=S.trk.slice(0,names.length);saveTrk();
  }
  /* symptoms and triggers belong to each tracker; medications are shared */
  S.optc={};
  function optKey(kind,tid){return (kind==='meds'||!tid||tid==='mig')?KINDS[kind].store:KINDS[kind].store+'-'+tid}
  function optsOf(kind,tid){var k=optKey(kind,tid);if(k===KINDS[kind].store)return S.opts[kind];if(!S.optc[k])S.optc[k]=load(k,[]);return S.optc[k]}
  function saveOpts(kind,tid){save(optKey(kind,tid),optsOf(kind,tid))}
  function tdOf(tid){return S.f.td[tid]||(S.f.td[tid]={sev:null,meds:[],trig:[],symp:[]})}
  S.floorIds=load('gs-floor',null);if(!Array.isArray(S.floorIds))S.floorIds=FLOORDEF.slice();
  S.rtn=load('gs-rtn',null);if(!S.rtn||!S.rtn.parts)S.rtn=PROF?{parts:{morning:['dailymeds','teeth','clothes','muffin','kidsam','meal'],afternoon:PARTS.afternoon.steps.slice(),evening:PARTS.evening.steps.slice()},hidden:[],names:{}}:{parts:{morning:PARTS.morning.steps.slice(),afternoon:PARTS.afternoon.steps.slice(),evening:PARTS.evening.steps.slice()},hidden:['dailymeds'],names:{}};
  /* Get out of bed was added later: people who already had a routine get it as a hidden step they can put back */
  (function(){var all=[].concat(S.rtn.parts.morning,S.rtn.parts.afternoon,S.rtn.parts.evening,S.rtn.hidden||[]);if(all.indexOf('getup')<0){S.rtn.hidden=(S.rtn.hidden||[]).concat('getup')}})();
  [['kidsam','morning','meal'],['checkin','evening','tomorrow']].forEach(function(x){var all=[].concat(S.rtn.parts.morning,S.rtn.parts.afternoon,S.rtn.parts.evening,S.rtn.hidden||[]);if(all.indexOf(x[0])>=0)return;var a=S.rtn.parts[x[1]],i=a.indexOf(x[2]);if(i<0)a.push(x[0]);else a.splice(i,0,x[0])});
  S.cust=load('gs-cust',[]);S.reps=load('gs-reps',[]);S.repSeen=load('gs-repseen',{});S.se=null;S.re=null;
  S.cats=load('gs-cats',null);if(!S.cats)S.cats=BASE_CHIPS.filter(function(c){return c!=='Migraine'}).concat(S.custom);S.ce=null;S.catEdit=false;S.justOpen=null;
  S.look=load('gs-look','original');if(S.look==='greenhouse')S.look='original';if(!LOOKS[S.look])S.look='original';
  S.cw=load('gs-cw',null);if(!CWS[S.cw])S.cw=LOOKS[S.look].cw;
  function lookKey(){return S.logic==='mammal'?'creature':S.look}
  function applyLook(){var r=document.documentElement,c=S.logic==='mammal';r.setAttribute('data-look',c?'creature':S.look);r.setAttribute('data-cw',c?'creature':S.cw);if(c){r.setAttribute('data-season',curSeason());r.setAttribute('data-mood',S.mood)}else{r.removeAttribute('data-season');r.removeAttribute('data-mood')};var ap=S.appear||'auto';if(ap==='auto')r.removeAttribute('data-theme');else r.setAttribute('data-theme',ap);try{var m=document.querySelector('meta[name=theme-color]');if(m){var bg=getComputedStyle(r).getPropertyValue('--bg').trim();if(bg)m.setAttribute('content',bg)}}catch(e){}}
  try{applyLook()}catch(e){}



  /* ---- logic modes: how the app words things and what it asks of you ---- */
  var LOGICS={
    gentle:{name:'Gentle (default)',blurb:'How it works now: one next step at a time, nothing overdue, plenty of slack.',icon:MOTIFS.original,voice:'Warm, plain and calm.'},
    clock:{name:'On the clock',blurb:'Cares about time. Steps get start times and lengths, plans warn you earlier, and you can slide the whole schedule if you run behind.',icon:'<circle cx="16" cy="16" r="11"/><path d="M16 9v7l5 3"/>',voice:'Practical and time-aware. You may say how long something realistically takes or suggest a short timer, but never rush or scold.'},
    mammal:{name:'Woodland creatures',blurb:'A woodland storybook theme, the first of several story worlds planned. The whole look changes with the season, you pick your mood (slow, energetic, dreamy or balanced), the parking lot becomes the stash, and the words turn into a small animal tending its den.',icon:'<ellipse cx="16" cy="21" rx="6" ry="5"/><circle cx="8" cy="14" r="2.4"/><circle cx="13" cy="9" r="2.4"/><circle cx="19" cy="9" r="2.4"/><circle cx="24" cy="14" r="2.4"/>',voice:'Lightly playful: frame things as if she were a small animal tending a den and foraging, but keep the actual advice clear and kind. A light touch, not constant.'},
    tiny:{name:'Tiny steps',blurb:'Every step shrinks to its first 30 seconds. For days when starting is the whole problem.',icon:'<path d="M4 26h7v-7h7v-7h7V6h3"/>',voice:'Always shrink any suggestion to something doable in about 30 seconds.'},
    low:{name:'Low battery',blurb:'Only the basics today: medications, §C, water, and food. Quiet words, nothing extra.',icon:'<rect x="4" y="10" width="21" height="12" rx="3"/><path d="M28 14v4M8 14v4"/>',voice:'She is low on energy: keep replies very short, offer only the minimum, and give permission to do less.'}
  };
  var UI0={
    greet:function(l){return 'Good '+l.toLowerCase()+', §N.'},next:'Next',allset:'All set',
    routine:function(p){return 'Your '+p+', in order'},plans:'Plans',up:'Coming up',
    rough:'Rough morning? Tap here.',music:'Music, no detours',stuck:'Stuck?',skip:'I skipped this',
    food:'What should I have?',eaten:'I ate',picked:'I picked something, done',lunchBtn:'Text §P: lunch?',solo:'I will eat on my own',
    lowNote:'Low battery mode: just the basics. Everything else can wait, and nothing is overdue.',
    win:60,hello:'Hi. What is going on? Tell me in your own words, or tap one.',ctitle:'Here to help'
  };
  var UIALT={
    clock:{next:'On the clock',routine:function(p){return 'Your '+p+' schedule'},skip:'Skip this one',win:90,hello:'Hi. What is getting in the way? Tell me, or tap one.'},
    mammal:{
      greet:function(l){return 'Good '+l.toLowerCase()+', little mammal.'},next:'Next in the den',allset:'Settled in',
      routine:function(p){return 'Your '+p+' in the den, in order'},plans:'Places to be',up:'Further down the trail',
      rough:'Rough morning? Curl up here.',music:'Sounds for the burrow',stuck:'Lost in the brush?',skip:'I let this one go',
      food:'What should I forage?',eaten:'I already foraged',picked:'I found something, done',lunchBtn:'Howl to §P: lunch?',solo:'I will forage alone',
      lowNote:'Bear minimum: just the essentials. The den can wait. Nothing is overdue.',
      hello:'Hello, little one. What is going on in the den?',ctitle:'Lost in the brush?'
    },
    tiny:{next:'First 30 seconds',allset:'That was enough',routine:function(p){return 'Tiny steps for '+p},skip:"I'm skipping",sq:true,hello:'Hi. Tell me what you are stuck on. Small is fine.'},
    low:{greet:function(l){return 'Soft '+l.toLowerCase()+', §N.'},next:'Just this',allset:'Basics covered',routine:function(p){return 'The basics for '+p},rough:'Rougher than usual? Tap here.'}
  };
  var ALT={
    mammal:{
      getup:{t:'Leave the nest',s:'Paws on the floor. That is the whole step.',c:'Out of the nest'},
      dailymeds:{t:'Morning medicine',s:'First thing, before any foraging.'},
      teeth:{t:'Freshen your whiskers',s:'Teeth and face.'},
      clothes:{t:'Shed the sleep fur',s:'Out of pajamas.'},
      muffin:{t:'Feed §C, the other small one',s:'The bowl gets you into the kitchen.',c:'Fed'},
      water:{t:'Drink at the stream',s:'Just one glass, wherever you are.'},
      meal:{t:'Forage for your own food',s:'§C §is sorted. What is worth gathering?'},
      lunch:{t:'Midday forage',s:'§P is usually free around 12:30. Forage together?'},
      jobs:{t:'Scout one small trail',s:'Twenty minutes. Just the scouting, not the finishing.'},
      pt:{t:'Stretch the old muscles',s:'Your stretches or exercises. The smaller round counts if your energy is low.'},
      muffinpm:{t:"§C's evening bowl",s:'The evening bowl.'},
      dinner:{t:'Evening forage',s:'What sounds doable tonight?'},
      tidy:{t:'Tidy one corner of the den',s:'Ten minutes, one spot. The kitchen counter is a good one.'},
      tomorrow:{t:'Sniff the wind for tomorrow',s:'Just the fixed things, and one easy place to start.'}
    },
    tiny:{
      getup:{t:'Sit up',s:'Just sit up. Feet on the floor comes next.',c:'Up, done'},
      dailymeds:{t:'Open the medicine cabinet',s:'Just open it. Taking them comes next.'},
      teeth:{t:'Walk to the bathroom',s:'That is the whole step. Brushing usually follows once you are there.',c:'Brushed, done'},
      clothes:{t:'Pick one thing to wear',s:'One piece, from the drawer. Put it on after.',c:'Dressed'},
      muffin:{t:"Pick up §C's bowl",s:'Just carry it to the kitchen. The scoop follows.'},
      water:{t:'Fill a glass',s:'Just fill it. Sipping can come later.'},
      meal:{t:'Open the fridge',s:'Just look. Whatever catches your eye counts.'},
      lunch:{t:'Check if §P is free',s:'One text, then the rest.'},
      jobs:{t:'Open the project',s:'Just open it. Nothing else is needed yet.'},
      pt:{t:'Put the mat on the floor',s:'Only the mat. One exercise after, if you feel like it.',c:'Mat is out'},
      muffinpm:{t:"Pick up §C's bowl",s:'Carry it to the kitchen. The scoop follows.'},
      dinner:{t:'Open the fridge or the app',s:'One look. Pick the easiest thing you see.'},
      tidy:{t:'Pick up one thing',s:'One item, back where it lives.'},
      tomorrow:{t:'Open the calendar',s:'Look at tomorrow for ten seconds.'}
    }
  };
  var DONEALT={
    mammal:{morning:{t:'The den is secure.',s:'Everything after this is a bonus. Pick some sounds, or sniff around and see what the day wants.'},afternoon:{t:'Afternoon foraged.',s:'Whatever happened, the afternoon is done. Evening is its own trail.'},evening:{t:'Time to curl up.',s:'Rest counts. Nothing carries over as overdue.'}},
    tiny:{morning:{t:'That was enough to get moving.',s:'Pick some music, or see what the day wants.'},afternoon:{t:'Small steps, done.',s:'Evening is its own thing.'},evening:{t:'That is the day.',s:'Rest counts. Nothing carries over as overdue.'}},
    low:{morning:{t:'The basics are covered.',s:'That is enough for now. Rest counts.'},afternoon:{t:'Lunch handled.',s:'That is enough for the afternoon.'},evening:{t:'That is the day.',s:'Rest counts. Nothing carries over as overdue.'}}
  };
  /* clock mode: start minute and length for each step */
  var TIMES={getup:[535,5],kidsam:[570,15],checkin:[1200,10],dailymeds:[540,5],teeth:[545,10],clothes:[555,10],muffin:[565,10],water:[575,5],meal:[580,30],lunch:[750,45],jobs:[810,20],pt:[840,30],muffinpm:[1050,10],dinner:[1080,45],tidy:[1140,10],tomorrow:[1160,10]};
  syncSteps();
  function isFloor(id){return S.floorIds.indexOf(id)>=0}
  function floorAll(p){var inAny=[].concat(S.rtn.parts.morning,S.rtn.parts.afternoon,S.rtn.parts.evening);return S.rtn.parts[p].concat(FLOORALL[p].filter(function(id){return S.rtn.hidden.indexOf(id)<0&&inAny.indexOf(id)<0}))}
  function floorSteps(p){return floorAll(p).filter(function(id){return isFloor(id)&&!offId(id)})}
  function repDue(r,d){
    if(r.rep==='w')return r.days.indexOf(d.getDay())>=0;
    var dim=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
    if(r.mode==='4w'){if(!r.anchor)return false;var p=r.anchor.split('-'),a0=new Date(+p[0],+p[1]-1,+p[2]),df=Math.round((new Date(d.getFullYear(),d.getMonth(),d.getDate())-a0)/864e5);return df>=0&&df%28===0}
    if(r.mode==='nth'){if(d.getDay()!==r.dow)return false;return r.nth===5?d.getDate()+7>dim:Math.ceil(d.getDate()/7)===r.nth}
    return d.getDate()===Math.min(r.dom||1,dim)}
  function partSteps(p){var a=S.rtn.parts[p].filter(function(id){return !offId(id)}),now=new Date();S.reps.forEach(function(r){if(r.as==='step'&&r.part===p&&repDue(r,now))a.push('r_'+r.id)});return a}
  function syncSteps(){S.cust.forEach(function(x){STEPS[x.id]={t:x.t,s:'One small step.',c:'Done'};NAMES[x.id]=x.t});S.reps.forEach(function(r){var id='r_'+r.id;STEPS[id]={t:r.t,s:'Repeating, and due today.',c:'Done'};NAMES[id]=r.t})}
  function saveRtn(){save('gs-rtn',S.rtn);save('gs-cust',S.cust);save('gs-reps',S.reps)}
  function genReps(){
    var tk=ymd(new Date()),now=new Date(),ch=false;
    S.reps.forEach(function(r){
      if(r.as!=='lot'||!repDue(r,now)||S.repSeen[r.id]===tk)return;
      S.repSeen[r.id]=tk;ch=true;
      if(!S.tasks.some(function(t){return !t.done&&t.rep===r.id}))S.tasks.unshift({id:'t'+Date.now()+r.id,rep:r.id,title:r.t,h:'week',nr:false,fun:false,work:[],mins:0,w:'med',due:'',steps:[],done:false,created:Date.now()});
    });
    if(ch){save('gs-repseen',S.repSeen);saveTasks()}
  }
  S.logic=load('gs-logic','gentle');if(!LOGICS[S.logic])S.logic='gentle';
  function lowRevert(){var mt=load('gs-moodtmp',null);if(mt&&mt.day!==ymd(new Date())){S.mood=MOODS[mt.prev]?mt.prev:'balanced';save('gs-mood',S.mood);try{localStorage.removeItem('gs-moodtmp')}catch(e){}}var t=load('gs-lowtmp',null);if(!t)return;if(t.day!==ymd(new Date())){S.logic=(LOGICS[t.prev]&&t.prev)||'gentle';save('gs-logic',S.logic);try{localStorage.removeItem('gs-lowtmp')}catch(e){}return true}}
  function clearLowTmp(){try{localStorage.removeItem('gs-lowtmp')}catch(e){}}
  S.mt='themes';S.appear=load('gs-appear','auto');if(['auto','light','dark'].indexOf(S.appear)<0)S.appear='auto';S.shift=0;S.noAI=false;
  S.chat={open:false,msgs:[],busy:false,err:'',retry:''};


  /* ---- Little mammal moods and seasons ---- */
  var MOODS={
    slow:{name:'Slow',who:'sleepy bear',desc:'slow and sluggish, no big ambitions, mostly the basics'},
    energetic:{name:'Energetic',who:'busy squirrel',desc:'energetic and eager to get things done'},
    dreamy:{name:'Dreamy',who:'little songbird',desc:'head in the clouds, creative and free, wants to do the fun thing first'},
    balanced:{name:'Balanced',who:'little hedgehog',desc:'moderate and balanced, a mix of determined, cozy and creative'}
  };
  var SEASONS={auto:'Auto',spring:'Spring',summer:'Summer',autumn:'Autumn',winter:'Winter'};
  S.mood=load('gs-mood','balanced');if(!MOODS[S.mood])S.mood='balanced';
  S.season=load('gs-season','auto');if(!SEASONS[S.season])S.season='auto';
  function curSeason(){if(S.season!=='auto')return S.season;var m=new Date().getMonth();return (m<2||m===11)?'winter':m<5?'spring':m<8?'summer':'autumn'}
  function lotThe(){var l=U().lot.toLowerCase();return l.indexOf('the ')===0?l:'the '+l}
  function creature(){return S.logic==='mammal'}
  function lowMode(){return S.logic==='low'||(S.logic==='mammal'&&S.mood==='slow')}
  UI0.lot='Parking lot';UI0.parkIt='Park it';UI0.parked='Parked';UI0.back='Back to the parking lot';UI0.charge='Recharge Battery';UI0.chargeSub='Gentle ideas for when your battery is low. Always suggestions, not requirements.';
  UIALT.mammal.lot='The stash';UIALT.mammal.parkIt='Stash it';UIALT.mammal.parked='Stashed';UIALT.mammal.back='Back to the stash';UIALT.mammal.charge='Curl-up ideas';UIALT.mammal.chargeSub='Gentle ways to rest in the den. Always suggestions, not requirements.';
  UI0.plinko='Plinko';UI0.plbtn='Let the ball choose';UIALT.mammal.plinko='Acorn drop';UIALT.mammal.plbtn='Let the acorn choose';
  UIALT.mammal.greet=function(l){return 'Good '+l.toLowerCase()+', '+WHO[S.mood][critterIdx()]+'.'};

  /* ---- parking lot: anything nebulous with no set time ---- */
  UI0.park='From the parking lot';UI0.start='Start this';UI0.another='Another one';UI0.later='Not today';
  UIALT.mammal.park='From the stash';UIALT.mammal.start='Start gathering';UIALT.mammal.another='Show another';
  S.tasks=load('gs-tasks',null);
  if(!Array.isArray(S.tasks))S.tasks=[
    {id:'t1',title:'Return the package',ex:true,g:'g1',h:'week',nr:false,fun:false,work:[],mins:15,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-6*864e5},
    {id:'t2',title:'Fill out the insurance form',ex:true,h:'week',nr:false,fun:false,work:[],mins:30,w:'med',due:'',offDue:5,steps:[{t:'Find the form',done:false},{t:'Fill in just your name and address',done:false}],done:false,created:Date.now()-2*864e5},
    {id:'t3',title:'Reply to that email',ex:true,h:'week',nr:false,fun:false,work:[],mins:15,w:'big',due:'',offDue:null,steps:[],done:false,created:Date.now()-864e5},
    {id:'t4',title:'Sort out the plant shelf',ex:true,g:'g2',h:'month',nr:false,fun:false,work:[],mins:60,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-9*864e5},
    {id:'t5',title:'Sketch something just for fun',ex:true,g:'g3',h:'week',nr:false,fun:true,work:[],mins:30,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-3*864e5},
    {id:'t6',title:'Drop off the dry cleaning',ex:true,g:'g1',h:'week',nr:false,fun:false,work:[],mins:15,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-4*864e5},
    {id:'t7',title:'Pick up stamps',ex:true,g:'g1',h:'month',nr:false,fun:false,work:[],mins:15,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-7*864e5},
    {id:'t8',title:'Clean out the fridge',ex:true,g:'g2',h:'week',nr:false,fun:false,work:[],mins:30,w:'med',due:'',offDue:null,steps:[{t:'Toss anything expired',done:false},{t:'Wipe one shelf',done:false}],done:false,created:Date.now()-5*864e5},
    {id:'t9',title:'Swap the winter clothes',ex:true,g:'g2',h:'month',nr:false,fun:false,work:[],mins:60,w:'med',due:'',offDue:null,steps:[],done:false,created:Date.now()-11*864e5},
    {id:'t10',title:'Try a recipe from the library cookbook',ex:true,g:'g3',h:'month',nr:false,fun:true,work:[],mins:60,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-8*864e5},
    {id:'t11',title:'The new ramen place',ex:true,g:'g3',h:'month',nr:false,fun:true,work:[],mins:90,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-2*864e5},,
    {id:'t13',title:'A classic you have never seen',ex:true,h:'month',nr:false,fun:true,work:[],mins:120,w:'small',due:'',offDue:null,steps:[],done:false,created:Date.now()-10*864e5}
  ];
  S.tk=null;S.doing=null;S.askMore=false;S.celeb=null;S.skipPark=[];S.tkBusy=false;S.ovv='week';S.ovMo=0;S.ovDay=null;S.lot=false;S.pl=null;S.lotTab='week';S.lotAnim=false;
  function saveTasks(){save('gs-tasks',S.tasks)}
  function taskById(id){for(var i=0;i<S.tasks.length;i++)if(S.tasks[i].id===id)return S.tasks[i];return null}
  function dueOf(t){return t.ex&&t.offDue!=null?ymd(addDays(new Date(),t.offDue)):(t.due||'')}
  function dueDays(t){var d=dueOf(t);if(!d)return null;return Math.round((parseKey(d)-parseKey(ymd(new Date())))/864e5)}
  function fmtMins(m){return m<60?m+' min':(m%60?(m/60).toFixed(1):(m/60))+' hr'}
  function basicsDay(){return lowMode()}
  function availMin(){
    var now=SIM[S.part],lim={morning:720,afternoon:1020,evening:1320}[S.part];
    evsOn(ymd(new Date())).forEach(function(ev){if(tmin(ev.time)>now){var lb=leaveBy(ev);if(lb<lim)lim=lb}});
    return Math.max(0,lim-now);
  }
  function ageDays(t){return Math.min(10,Math.floor((Date.now()-(t.created||Date.now()))/864e5))}
  function scoreTask(t,av){
    var sc=0,d=dueDays(t),m=t.mins||30,w=t.w||'med';
    if(d!==null)sc+=d<=0?55:d===1?40:d<=3?28:d<=7?14:4;
    sc+=w==='big'?24:w==='small'?0:12;
    sc+=ageDays(t);
    if(t.h==='day')sc+=t.must?45:30;
    if(m<=av*0.6)sc+=6;
    if(S.logic==='tiny'&&m<=15)sc+=8;
    if(creature()&&S.mood==='energetic'&&w==='big')sc+=10;
    if(S.logic==='clock'&&t.mins)sc+=4;
    return sc;
  }
  function firstStep(t){return t.steps.filter(function(x){return !x.done})[0]||null}
  function rank(flt){
    var tk=ymd(new Date()),av=availMin();
    var open=S.tasks.filter(function(t){return !t.done&&t.snooze!==tk&&S.skipPark.indexOf(t.id)<0&&(!flt||flt(t))});
    var arr=open.map(function(t){return {t:t,s:scoreTask(t,av),m:t.mins||30}});
    var slack=(creature()&&S.mood==='energetic')?0:10;
    var fit=arr.filter(function(x){return x.m+slack<=av}),partial=!fit.length,pool=partial?arr:fit;
    pool.sort(function(a,b){return b.s-a.s});
    return {list:pool,partial:partial,av:av};
  }
  function whyOf(x,partial,av){
    var t=x.t,d=dueDays(t),why;
    if(partial)why='You only have about '+av+' minutes, so just the first small piece.';
    else if(d!==null&&d>=0&&d<=3)why='It has a date coming up: '+dayLabel(dueOf(t))+'.';
    else if(d!==null&&d<0)why='It has a date on it, and there is room for it now.';
    else if(t.w==='big')why='It matters most on your list, and it fits the time you have.';
    else if(ageDays(t)>=5)why='It has been waiting a while, and now there is room.';
    else why='It fits the time you have right now.';
    if(S.logic==='clock'&&!partial)why+=' About '+x.m+' of your '+av+' free minutes.';
    return why;
  }
  function pickTask(flt){
    var r=rank(flt);if(!r.list.length)return null;
    var x=r.list[0];return {t:x.t,m:x.m,av:r.av,partial:r.partial,why:whyOf(x,r.partial,r.av)};
  }
  /* anything a randomizer (plinko, roulette, and so on) may pick from: parked tasks not marked as excluded */
  function randPool(){return S.tasks.filter(function(t){return !t.done&&!t.nr})}
  function taskTags(t){var _gn=t.g&&groupName(t.g);
    var g='',d=dueOf(t);
    if(t.ex)g+=tag('Example');
    if(_gn&&S.lotTab!=='groups')g+=tag(_gn);
    if(t.mins)g+=tag(fmtMins(t.mins));
    if(t.w==='big')g+=tag('A lot');else if(t.w==='small')g+=tag('A little');
    if(t.bd)g+=tag('Big deal');
    if(t.h==='day'&&t.must)g+=tag('Must do');
    if(t.fun)g+=tag('Fun');
    if(d)g+=tag('By '+dayLabel(d));
    if(t.nr)g+=tag('No random picks');
    if(t.work&&t.work.length)g+=tag('Worked on '+t.work.length+(t.work.length===1?' time':' times'));
    return '<span class="tags">'+g+'</span>';
  }

  /* self care: what the "parking lot" card turns into when the battery is low */
  var CARE0=['Drink a full glass of water','Make a cup of tea','Take a warm shower','Step outside for five minutes','Stretch your neck and shoulders','Sit somewhere sunny for a few minutes','Put on a favorite album','Sit with §C for a few minutes','Wrap up in something soft','Eat something small and easy'];
  S.care=load('gs-care',null);if(!Array.isArray(S.care)||!S.care.length)S.care=CARE0.slice();
  S.care=S.care.map(function(x){return x==='Lie down with your eyes closed for ten minutes'?'Sit somewhere sunny for a few minutes':x});
  S.careIdx=Math.floor(Math.random()*S.care.length);
  /* Woodland wording for the built-in ideas; your own ideas show as you wrote them */
  var CAREW={'Drink a full glass of water':'Drink from the stream: one full glass of water','Make a cup of tea':'Brew a warm cup of tea and wrap your paws around it','Take a warm shower':'Soak in a warm spring (a warm shower counts)','Step outside for five minutes':'Poke your nose outside for five minutes','Stretch your neck and shoulders':'Have a long, slow stretch like a bear waking up','Sit somewhere sunny for a few minutes':'Find a patch of sun and bask for a few minutes','Put on a favorite album':'Fill the den with a favorite album','Sit with §C for a few minutes':'Nestle in with §C for a few minutes','Wrap up in something soft':'Burrow into the softest blanket you have','Eat something small and easy':'Nibble something small and easy'};
  function careList(){
    var pet=!!(PROF&&PROF.pet);
    return S.care.filter(function(x){return pet||String(x).indexOf('§C')<0}).map(function(x){return creature()&&CAREW[x]?CAREW[x]:x});
  }
  function careCard(){
    var u=U(),L=careList(),c=L.length?L[S.careIdx%L.length]:'Rest for a few minutes';
    return '<div class="card"><h3>'+esc(u.charge)+'</h3><div class="sugg"><b>'+esc(c)+'</b><span class="small">'+esc(u.chargeSub)+'</span></div><div class="row"><button class="btn grow" data-a="caredid">I did this</button><button class="btn alt grow" data-a="carenext">Another one</button></div><details class="tuck"><summary>Add your own</summary><form class="add" data-a="careadd"><input type="text" id="careq" placeholder="e.g. Water the plants slowly" aria-label="Add a self care idea"><button type="submit">Add</button></form></details></div>';
  }
  function suggBlock(pk,u,startLabel,soft,bare,kick){
    var t=pk.t,fs=firstStep(t);
    var h='<div class="sugg">'+(kick?'<span class="kick">'+kick+'</span>':'')+'<b>'+esc(t.title)+'</b>'+(bare?'':'<span class="small">'+esc(pk.why)+'</span>');
    if(S.logic==='tiny')h+='<span><b style="font-size:16px">Just:</b> '+esc(fs?fs.t:'open it and look at it for one minute.')+'</span>';
    else if(fs)h+='<span class="small">First step: '+esc(fs.t)+'</span>';
    else if(pk.partial)h+='<span class="small">First piece: open it and look at it for a minute.</span>';
    h+=(kick?'':taskTags(t))+'</div><div class="row"><button class="btn'+(soft?' alt':'')+' grow" data-a="tkstart" data-v="'+esc(t.id)+'">'+esc(startLabel||u.start)+'</button><button class="btn alt grow" data-a="tkanother" data-v="'+esc(t.id)+'">'+esc(u.another)+'</button></div>'+(bare?'':'<div class="row"><button class="quiet" data-a="tklater" data-v="'+esc(t.id)+'">'+esc(u.later)+'</button></div>');
    return h;
  }

  /* ---- plinko: a ball picks one of the tasks that fit right now ---- */
  var PLN=5;
  /* major US holidays, worked out from the calendar so they are always right for any year */
  S.hol=load('gs-hol',true);
  var HOLC={};
  function nthDow(y,m,dow,n){var d=new Date(y,m,1);return 1+((dow-d.getDay()+7)%7)+(n-1)*7}
  function lastDow(y,m,dow){var l=new Date(y,m+1,0);return l.getDate()-((l.getDay()-dow+7)%7)}
  function easterOf(y){var a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(y,mo-1,da)}
  function holYear(y){
    if(HOLC[y])return HOLC[y];
    var o={};function add(m,d,n){var k=y+'-'+pad(m+1)+'-'+pad(d);(o[k]=o[k]||[]).push(n)}
    add(0,1,"New Year's Day");add(0,nthDow(y,0,1,3),'Martin Luther King Jr. Day');add(1,14,"Valentine's Day");add(1,nthDow(y,1,1,3),"Presidents' Day");
    var e=easterOf(y);add(e.getMonth(),e.getDate(),'Easter');
    add(4,nthDow(y,4,0,2),"Mother's Day");add(4,lastDow(y,4,1),'Memorial Day');add(5,19,'Juneteenth');add(5,nthDow(y,5,0,3),"Father's Day");
    add(6,4,'Independence Day');add(8,nthDow(y,8,1,1),'Labor Day');add(9,nthDow(y,9,1,2),"Columbus / Indigenous Peoples' Day");add(9,31,'Halloween');
    add(10,11,'Veterans Day');add(10,nthDow(y,10,4,4),'Thanksgiving');add(11,24,'Christmas Eve');add(11,25,'Christmas Day');add(11,31,"New Year's Eve");
    return HOLC[y]=o;
  }
  function holidaysOn(k){return S.hol?(holYear(+k.slice(0,4))[k]||[]):[]}
  var RNDS={plinko:'Plinko',wheel:'Spin wheel',coin:'Coin flip'};
  S.rnd=load('gs-rnd','plinko');if(!RNDS[S.rnd])S.rnd='plinko';
  function rndBtn(u){return S.rnd==='wheel'?'Spin the wheel':S.rnd==='coin'?'Flip a coin':u.plbtn}
  function wedge(i,n,R){var s=2*Math.PI/n,a0=i*s,a1=(i+1)*s,x0=150+R*Math.sin(a0),y0=150-R*Math.cos(a0),x1=150+R*Math.sin(a1),y1=150-R*Math.cos(a1);return 'M150 150L'+x0.toFixed(1)+' '+y0.toFixed(1)+'A'+R+' '+R+' 0 '+(s>Math.PI?1:0)+' 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+'Z'}
  function rndStart(){
    var P=S.pl,n=P.ids.length,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    P.k=Math.floor(Math.random()*n);P.drops=(P.drops||0)+1;P.phase=reduce?'done':'spin';P.go=false;
    if(P.mode==='wheel'){var seg=360/n;P.final=360*5+(360-(P.k+.5)*seg)}else P.final=360*4+(P.k?180:0);
    render();
    if(reduce)return;
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      if(S.pl!==P||P.phase!=='spin')return;
      var el=document.getElementById('rndspin');if(el){P.go=true;el.style.transform=P.mode==='wheel'?'rotate('+P.final+'deg)':'rotateY('+P.final+'deg)'}
      P.timer=setTimeout(function(){if(S.pl===P&&P.phase==='spin'){P.phase='done';render()}},P.mode==='wheel'?3800:1700);
    })});
  }
  function rndSheet(){
    var P=S.pl,u=U(),n=P.ids.length,tasks=P.ids.map(taskById).filter(Boolean),done=P.phase==='done',i;
    var title=P.mode==='wheel'?'Spin wheel':'Coin flip';
    var h='<div class="backdrop" data-a="plbg"><div class="sheet plsheet" role="dialog" aria-modal="true" aria-label="'+title+'"><div class="between"><h2 style="font-size:24px">'+title+'</h2><button class="x" data-a="plclose" aria-label="Close">&times;</button></div>';
    h+='<p class="small">'+(done?'Landed. These all fit the time you have, so any of them is a fine pick.':(P.mode==='wheel'?'Everything on the wheel fits the time you have right now. Tap it to skip the wait.':'Two things that fit the time you have. Tap the coin to skip the wait.'))+'</p>';
    var tf=done?(P.mode==='wheel'?'rotate('+P.final+'deg)':'rotateY('+P.final+'deg)'):(P.mode==='wheel'?'rotate(0deg)':'rotateY(0deg)');
    var st='transform:'+tf+(done?';transition:none':'');
    if(P.mode==='wheel'){
      h+='<div class="whlbox"'+(done?'':' data-a="rndskip"')+'><svg viewBox="0 0 300 300" role="img" aria-label="Wheel with '+n+' sections"><g id="rndspin" class="whl" style="'+st+'">';
      for(i=0;i<n;i++){var ang=(i+.5)*2*Math.PI/n;h+='<path d="'+wedge(i,n,136)+'" style="fill:var(--c'+i+');stroke:var(--surface);stroke-width:3;opacity:'+(done&&P.k!==i?'.4':'.92')+'"/><text x="'+(150+86*Math.sin(ang)).toFixed(1)+'" y="'+(150-86*Math.cos(ang)+7).toFixed(1)+'" text-anchor="middle" style="fill:#fff;stroke:rgba(0,0,0,.35);stroke-width:3;paint-order:stroke;font:700 22px var(--font-body)">'+(i+1)+'</text>'}
      h+='<circle cx="150" cy="150" r="14" style="fill:var(--surface);stroke:var(--ink2)" stroke-width="3"/></g><path d="M138 4h24l-12 26z" style="fill:var(--ink);stroke:var(--surface);stroke-width:2"/></svg></div>';
    }else{
      h+='<div class="coinwrap"'+(done?'':' data-a="rndskip"')+'><div id="rndspin" class="coin" style="'+st+'"><div class="face f1" style="background:var(--c0)">1</div><div class="face f2" style="background:var(--c1)">2</div></div></div>';
    }
    h+='<ol class="plleg">';
    tasks.forEach(function(t,j){h+='<li'+(done&&P.k===j?' class="win"':'')+'><i style="background:var(--c'+j+')">'+(j+1)+'</i><span>'+esc(t.title)+'</span></li>'});
    h+='</ol>';
    if(done&&tasks[P.k]){
      var w=tasks[P.k];
      h+='<div class="sugg"><b>'+esc(w.title)+'</b>'+taskTags(w)+'</div><div class="row"><button class="btn grow" data-a="plstart" data-v="'+esc(w.id)+'">'+esc(u.start)+'</button>'+(P.drops<2?'<button class="btn alt grow" data-a="rndagain">'+(P.mode==='wheel'?'Spin again':'Flip again')+'</button>':'')+'</div>';
      h+='<div class="row"><button class="quiet" data-a="plclose">'+(P.drops<2?'Not now':'Maybe later')+'</button></div>';
      if(P.drops>=2)h+='<p class="small">That is the second go, so this one is the pick. Closing leaves everything as it was.</p>';
    }else h+='<div class="row"><button class="quiet" data-a="rndskip">Skip the wait</button></div>';
    return h+'</div></div>';
  }
  function plPool(){return rank(function(t){return !t.nr}).list.map(function(x){return x.t})}
  function plSample(list){var a=list.slice(),o=[];while(a.length&&o.length<PLN){o.push(a.splice(Math.floor(Math.random()*a.length),1)[0])}return o}
  /* a field of pegs, whatever the number of slots. Positions are whole multiples of 30px (u = x/30); row s allows u with (u+s) odd. */
  var PLR=7,PLH=30,PLU0=5,PLY0=24,PLDY=23.5,PLPEG=3.2,PLOFF=10,PLFLOOR=241,PLTR=6;
  function plOK(s,u){return u>=1&&u<=9&&((u+s)%2===1)}
  function plSlotOf(n,u){return Math.floor(u*PLH*n/300)}
  function plPath(n,k){
    /* the landing slot is picked first (so every task is equally likely); then a random walk is drawn uniformly from all the walks that end there */
    var f=[],s,u,path=[];
    for(s=0;s<=PLR;s++)f.push([]);
    for(u=0;u<=10;u++)f[PLR][u]=plSlotOf(n,u)===k?1:0;
    for(s=PLR-1;s>=0;s--)for(u=0;u<=10;u++)f[s][u]=plOK(s,u)?(f[s+1][u-1]||0)+(f[s+1][u+1]||0):0;
    u=PLU0;
    for(s=0;s<PLR;s++){var l=f[s+1][u-1]||0,r=f[s+1][u+1]||0,go=Math.random()*(l+r)<r?1:0;path.push(go);u+=go?1:-1}
    return path;
  }
  function plFinal(n,path,k){
    var u=PLU0;path.forEach(function(g){u+=g?1:-1});
    var x=u*PLH,L=300*k/n,R=300*(k+1)/n;return Math.min(Math.max(x,L+10),R-10);
  }
  function plGeo(){
    var pegs=[],idx={},s,u;
    for(s=0;s<PLR;s++)for(u=1;u<=9;u++)if(plOK(s,u)){idx[s+':'+u]=pegs.length;pegs.push([u*PLH,PLY0+s*PLDY])}
    return {pegs:pegs,idx:idx};
  }
  function plDrop(){var P=S.pl,n=P.ids.length;P.k=Math.floor(Math.random()*n);P.path=plPath(n,P.k);P.xf=plFinal(n,P.path,P.k);P.phase='fall';P.drops=(P.drops||0)+1}
  function plLand(){if(!S.pl)return;plAnimate.id++;S.pl.phase='done';render()}
  /* the ball itself, drawn around 0,0: a glossy ball, or an acorn in Little mammal mode */
  var ACORN='<g transform="scale(.86)"><path d="M0 -10.5L.6 -14 L2 -14.7" fill="none" stroke="#4F3319" stroke-width="1.7" stroke-linecap="round"/><path d="M-6.2 -1.5C-6.7 5 -3.6 9.6 0 11.2C3.6 9.6 6.7 5 6.2 -1.5Z" fill="#BE8548" stroke="#6B4423" stroke-width="1.2" stroke-linejoin="round"/><path d="M-3.6 1.2C-3.9 4.2 -2.6 6.7 -1 8.2" fill="none" stroke="#E6BC85" stroke-width="1.3" stroke-linecap="round" opacity=".8"/><path d="M-7.4 -1.3C-7.7 -8.4 -3.6 -10.6 0 -10.6C3.6 -10.6 7.7 -8.4 7.4 -1.3C3.6 -.1 -3.6 -.1 -7.4 -1.3Z" fill="#7C5430" stroke="#4F3319" stroke-width="1.2" stroke-linejoin="round"/><path d="M-5.2 -2.6L-1.4 -8.6M-1.6 -1.2L2.4 -9.4M2.4 -1.2L6 -6.6M-5.6 -6L-2.4 -1.6M-1.6 -9.6L2.2 -1.4M2.6 -9.4L6 -2.6" fill="none" stroke="#4F3319" stroke-width=".7" opacity=".55"/></g>';
  function plBallArt(){return creature()?ACORN:'<circle r="6.6" style="fill:var(--accent);stroke:var(--ink);stroke-width:1.1"/><circle cx="-2.2" cy="-2.4" r="2.2" style="fill:#fff;opacity:.55"/>'}
  /* a hop-by-hop timeline: the outcome is already decided, this only makes the fall look physical */
  function plTimeline(n,path,k){
    var ph=[],u=PLU0,rot=0,rnd=Math.random,s,cx=150,G=plGeo();
    ph.push({d:300,a:[150,-10],c:[150,PLY0-PLOFF],g:1,H:0,r0:0,r1:0});
    for(s=0;s<PLR;s++){
      var dir=path[s]?1:-1,last=s===PLR-1,hit=G.idx[s+':'+u],nu=u+dir,tx,ty,dr=dir*(100+rnd()*110);
      if(last){tx=plFinal(n,path,k);ty=PLFLOOR}else{tx=nu*PLH+(rnd()-.5)*5;ty=PLY0+(s+1)*PLDY-PLOFF}
      ph.push({d:last?470:Math.max(300,360-8*s),a:[cx,PLY0+s*PLDY-PLOFF],c:[tx,ty],H:last?14:22+rnd()*8,r0:rot,r1:rot+dr,hit:hit});
      rot+=dr;u=nu;cx=tx;
    }
    var up=Math.round(rot/360)*360;
    [[420,30],[310,14],[230,7],[170,3]].forEach(function(b,q){ph.push({d:b[0],a:[cx,PLFLOOR],c:[cx,PLFLOOR],H:b[1],r0:q===0?rot:up,r1:up,land:q===0,sq:1})});
    ph.push({d:450,a:[cx,PLFLOOR],c:[cx,PLFLOOR],H:0,r0:up,r1:up});
    var t=0;ph.forEach(function(p){p.t0=t;t+=p.d});
    return {ph:ph,total:t,xf:cx};
  }
  function plAnimate(){
    var P=S.pl;if(!P||P.phase!=='fall')return;
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){plLand();return}
    var n=P.ids.length,TL=plTimeline(n,P.path,P.k),id=++plAnimate.id,t0=null,hist=[],fx=null,fxT=0,xf=TL.xf;
    var ball=document.getElementById('plball'),slot=document.getElementById('plslot'+P.k),svg=ball&&ball.ownerSVGElement,acorn=creature();
    var hits=TL.ph.filter(function(p){return p.hit!==undefined}).map(function(p){return {i:p.hit,t:p.t0}});
    var landT=TL.ph.filter(function(p){return p.land})[0].t0;
    function ease(u){return u*u*(3-2*u)}
    function f(ts){
      if(plAnimate.id!==id||!S.pl||S.pl.phase!=='fall')return;
      ball=document.getElementById('plball');if(!ball)return;
      if(t0===null)t0=ts;
      var t=ts-t0,p=TL.ph[TL.ph.length-1],q=0,u;
      for(q=0;q<TL.ph.length;q++){if(t<TL.ph[q].t0+TL.ph[q].d){p=TL.ph[q];break}}
      u=Math.max(0,Math.min(1,(t-p.t0)/p.d));
      var x=p.a[0]+(p.c[0]-p.a[0])*u,y=p.g?p.a[1]+(p.c[1]-p.a[1])*Math.pow(u,1.6):p.a[1]+(p.c[1]-p.a[1])*u-p.H*4*u*(1-u);
      var rot=p.r0+(p.r1-p.r0)*ease(u),sx=1,sy=1,since=t-p.t0;
      if((p.hit!==undefined||p.sq)&&since<120){var sq=1-since/120;sx=1+.2*sq;sy=1-.22*sq}
      else if(p.g||p.hit!==undefined){sy=1+.07*u*u;sx=1-.04*u*u}
      ball.setAttribute('transform','translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+rot.toFixed(1)+') scale('+sx.toFixed(3)+' '+sy.toFixed(3)+')');
      /* trail */
      if(!hist.length||ts-hist[0].ts>26){hist.unshift({x:x,y:y,ts:ts});if(hist.length>PLTR)hist.pop()}
      for(q=0;q<PLTR;q++){var c=document.getElementById('pltr'+q),h=hist[q+1];if(!c)continue;
        if(h&&t<landT){c.setAttribute('cx',h.x.toFixed(1));c.setAttribute('cy',h.y.toFixed(1));c.setAttribute('r',(5-q*.65).toFixed(1));c.setAttribute('opacity',(.26-q*.04).toFixed(2))}else c.setAttribute('opacity','0')}
      /* pegs: bump and ripple after a hit */
      hits.forEach(function(hh){
        var age=t-hh.t;if(age<0)return;
        var pg=document.getElementById('plpeg'+hh.i),rp=document.getElementById('plrp'+hh.i);if(!pg||!rp)return;
        if(age<460){var e=age/460;pg.setAttribute('r',(PLPEG+1.8*Math.max(0,1-age/200)).toFixed(2));pg.style.fill='var(--accent)';
          rp.setAttribute('r',(3+e*11).toFixed(1));rp.setAttribute('opacity',(.7*(1-e)).toFixed(2))}
        else if(!hh.done){hh.done=1;pg.setAttribute('r',PLPEG);pg.style.fill='var(--ink2)';rp.setAttribute('opacity','0')}
      });
      /* landing: slot glows, sparkles burst */
      if(t>=landT){
        var la=t-landT;
        if(slot)slot.style.opacity=(.28+.62*Math.min(1,la/320)).toFixed(2);
        if(!fx&&svg){fx=[];fxT=landT;var g=document.getElementById('plfx');
          for(q=0;q<12;q++){var el=document.createElementNS('http://www.w3.org/2000/svg','circle'),ang=-Math.PI*(.05+.9*q/11)+(Math.random()-.5)*.25;
            el.setAttribute('r','2');el.style.fill=q%3===0?'var(--sky)':'var(--accent)';g.appendChild(el);fx.push({el:el,vx:Math.cos(ang)*(.05+Math.random()*.07),vy:Math.sin(ang)*(.07+Math.random()*.09)})}
          if(navigator.vibrate)try{navigator.vibrate(18)}catch(e){}}
        if(fx)fx.forEach(function(o){var age=la;o.el.setAttribute('cx',(xf+o.vx*age).toFixed(1));o.el.setAttribute('cy',(PLFLOOR-6+o.vy*age+.00022*age*age).toFixed(1));
          o.el.setAttribute('opacity',Math.max(0,1-age/720).toFixed(2));o.el.setAttribute('r',Math.max(.1,2.1*(1-age/900)).toFixed(2))});
      }
      if(t>=TL.total)plLand();else requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }
  plAnimate.id=0;
  function plBtn(){
    if(plPool().length<2)return '';
    var u=U(),hot=S.skipPark.length>=2;
    return (hot?'<p class="small">Cannot decide? Let chance pick.</p>':'')+'<div class="row"><button class="'+(hot?'btn alt grow':'quiet')+'" data-a="plopen">'+esc(rndBtn(u))+'</button></div>';
  }
  function plSheet(){
    var P=S.pl;if(!P)return '';
    if(P.mode)return rndSheet();
    var u=U(),n=P.ids.length,g=plGeo(),tasks=P.ids.map(taskById).filter(Boolean),done=P.phase==='done',i;
    var h='<div class="backdrop" data-a="plbg"><div class="sheet plsheet" role="dialog" aria-modal="true" aria-label="'+esc(u.plinko)+'"><div class="between"><h2 style="font-size:24px">'+esc(u.plinko)+'</h2><button class="x" data-a="plclose" aria-label="Close">&times;</button></div>';
    h+='<p class="small">'+(done?'Landed. These all fit the time you have, so any of them is a fine pick.':'Everything on the board fits the time you have right now. Tap the board to skip the wait.')+'</p>';
    h+='<div class="plboard"'+(done?'':' data-a="plskip"')+'><svg viewBox="0 0 300 260" role="img" aria-label="Plinko board with '+n+' slots">';
    for(i=0;i<n;i++){h+='<rect id="plslot'+i+'" x="'+(300*i/n+2)+'" y="200" width="'+(300/n-4)+'" height="52" rx="8" style="fill:var(--c'+i+');opacity:'+(done&&P.k===i?'.9':'.28')+'"/>'}
    for(i=1;i<n;i++){h+='<rect x="'+(300*i/n-1.5)+'" y="198" width="3" height="54" rx="1.5" style="fill:var(--ink2);opacity:.45"/>'}
    g.pegs.forEach(function(p,q){h+='<circle id="plpeg'+q+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+PLPEG+'" style="fill:var(--ink2)"/><circle id="plrp'+q+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="4" fill="none" opacity="0" style="stroke:var(--accent)" stroke-width="1.6"/>'});
    if(!done)for(i=0;i<6;i++)h+='<circle id="pltr'+i+'" r="5" opacity="0" style="fill:'+(creature()?'#B27A40':'var(--accent)')+'"/>';
    h+='<g id="plfx"></g>';
    var bx=done?P.xf:150,by=done?PLFLOOR:6;
    h+='<g id="plball" transform="translate('+bx+' '+by+')">'+plBallArt()+'</g>';
    for(i=0;i<n;i++)h+='<text x="'+(300*(i+.5)/n)+'" y="247" text-anchor="middle" stroke-linejoin="round" style="fill:var(--ink);stroke:var(--surface2);stroke-width:3.2;paint-order:stroke;font:700 16px var(--font-body);pointer-events:none">'+(i+1)+'</text>';
    h+='</svg></div>';
    h+='<ol class="plleg">';
    tasks.forEach(function(t,j){h+='<li'+(done&&P.k===j?' class="win"':'')+'><i style="background:var(--c'+j+')">'+(j+1)+'</i><span>'+esc(t.title)+'</span></li>'});
    h+='</ol>';
    if(done&&tasks[P.k]){
      var w=tasks[P.k];
      h+='<div class="sugg"><b>'+esc(w.title)+'</b>'+taskTags(w)+'</div><div class="row"><button class="btn grow" data-a="plstart" data-v="'+esc(w.id)+'">'+esc(u.start)+'</button>'+(P.drops<2?'<button class="btn alt grow" data-a="plagain">Drop again</button>':'')+'</div>';
      h+='<div class="row"><button class="quiet" data-a="plclose">'+(P.drops<2?'Not now':'Maybe later')+'</button></div>';
      if(P.drops>=2)h+='<p class="small">That is the second drop, so this one is the pick. Closing leaves everything as it was.</p>';
    }else h+='<div class="row"><button class="quiet" data-a="plskip">Skip the wait</button></div>';
    return h+'</div></div>';
  }
  function parkCard(){
    if(basicsDay())return careCard();
    var u=U(),open=S.tasks.filter(function(t){return !t.done}).length;
    var h='<div class="card"><div class="between"><h3 class="parkh">'+esc(u.park)+'</h3><button class="addbtn" data-a="lot">Open</button></div>';
    if(!open)h+='<p class="small">Nothing here yet. Add anything nebulous whenever it pops into your head.</p>';
    else if(creature()&&S.mood==='energetic'){
      var top=rank().list.slice(0,3);
      if(!top.length)h+='<p class="small">That is everything for now. They come back tomorrow.</p>';
      else{
        h+='<p class="small">Energy is up, so here is what the stash has for you. Pick one, or pick them all.</p>';
        top.forEach(function(x){h+='<div class="sugg"><b>'+esc(x.t.title)+'</b>'+taskTags(x.t)+'<div class="row"><button class="btn grow" data-a="tkstart" data-v="'+esc(x.t.id)+'">'+esc(u.start)+'</button><button class="quiet" data-a="tklater" data-v="'+esc(x.t.id)+'">'+esc(u.later)+'</button></div></div>'});
      }
    }else if(creature()&&S.mood==='dreamy'){
      var hardDone=load('gs-harddone','')===ymd(new Date()),fun=pickTask(function(t){return t.fun}),hard=hardDone?null:pickTask(function(t){return !t.fun});
      if(!fun&&!hard&&!hardDone)h+='<p class="small">That is everything for now. They come back tomorrow.</p>';
      if(hardDone)h+='<p class="small">'+(fun?'The important one is done for today. The rest of the day is yours, and fun is on the menu.':'The important one is done for today. The rest of the day is yours.')+'</p>';
      if(fun)h+=(hard?suggBlock(fun,u,'Start this one',true,true,'The fun one'):(hardDone?'':'<p class="small">Fun is on the menu today.</p>')+suggBlock(fun,u,'Start this one',true,true));
      if(hard)h+=(fun?'<div class="orsep" aria-hidden="true"><span>or</span></div>':'<p class="small">Nothing fun is stashed yet, so here is the important one.</p>')+'<div class="sugg"><span class="kick">The important one</span><b>'+esc(hard.t.title)+'</b><span class="small">'+(fun?'Doing it first earns a little celebration. Fun first is fine too.':'Doing it first earns a little celebration.')+'</span>'+(fun?'':taskTags(hard.t))+'</div><div class="row"><button class="btn hot grow" data-a="tkhard" data-v="'+esc(hard.t.id)+'">Do this one first</button></div><div class="row"><button class="quiet" data-a="tkanother" data-v="'+esc(hard.t.id)+'">Give me a different important task</button></div>';
      if(hard)return h+'</div>';
    }else{
      var pk=pickTask();
      if(!pk)h+='<p class="small">That is all the suggestions for now. They come back tomorrow.</p>';
      else h+=suggBlock(pk,u);
    }
    return h+plBtn()+'</div>';
  }
  function doingHero(t){
    var fs=firstStep(t),u=U();
    if(S.bigDone===t.id)return '<section class="hero" aria-live="polite"><div class="kicker">Working on it</div><h2>'+esc(t.title)+'</h2><p class="sub">That was a big one, and you did it. Really.</p><div class="row"><button class="btn grow bounce" disabled>All done</button><button class="btn alt grow dropaway" disabled tabindex="-1" aria-hidden="true">Did some of it</button></div></section>';
    if(S.askMore){
      var allSteps=t.steps.length>0&&!fs;
      return '<section class="hero" aria-live="polite"><div class="kicker">Nice work</div><h2>That counts. Keep going?</h2><p class="sub">'+esc(t.title)+(fs?'. Next small piece: '+esc(fs.t):'')+(allSteps?'. Every step is ticked.':'.')+' It is saved on the task that you worked on it.</p><div class="row"><button class="btn grow" data-a="tkcont">Keep going</button><button class="btn alt grow" data-a="tkpause">I am done for now</button></div>'+(allSteps?'<div class="row"><button class="quiet" data-a="tkfinish">Mark the whole task done</button></div>':'')+'</section>';
    }
    return '<section class="hero" aria-live="polite"><div class="kicker">Working on it</div><h2>'+esc(t.title)+'</h2><p class="sub">'+esc(fs?'Next small piece: '+fs.t:'Just start. Ten minutes counts, and so does less.')+'</p>'+(t.bd?'<p class="small"><b>This one is a big deal.</b> It is allowed to feel heavy. Starting is already the hard part, and finishing gets a proper celebration.</p>':'')+'<div class="row"><button class="btn grow" data-a="tkfinish">All done</button><button class="btn alt grow" data-a="tkstep">'+(fs?'Did that step':'Did some of it')+'</button></div><div class="row"><button class="quiet" data-a="tkstop">'+esc(u.back)+'</button></div></section>';
  }
  function bay(t,n,doneRow){
    var chk=doneRow?'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"/></svg>':'';
    var nd=t.steps.filter(function(x){return x.done}).length;
    return '<div class="bay" data-n="'+(doneRow?'':'P'+n)+'"><button class="check" role="checkbox" aria-checked="'+(!!doneRow)+'" aria-label="'+(doneRow?'Move back: ':'Mark done: ')+esc(t.title)+'" data-a="'+(doneRow?'tkundo':'tkdone')+'" data-v="'+esc(t.id)+'">'+chk+'</button><button class="body" data-a="tkopen" data-v="'+esc(t.id)+'"><b'+(doneRow?' style="text-decoration:line-through;opacity:.7"':'')+'>'+esc(t.title)+'</b>'+(doneRow?'':taskTags(t)+(t.steps.length?'<span class="small">'+nd+' of '+t.steps.length+' steps</span>':''))+'</button></div>';
  }
  function lotPage(){var u=U();return head({title:u.lot,sub:'Anything with no set time yet. Give something a date only if it really has one.'})+'<aside class="lot lotpage" aria-label="'+esc(u.lot)+'">'+lotInner(true)+'</aside>'}
  function lotSheet(){
    if(!S.lot)return '';
    var u=U();
    return '<div class="lotbg" data-a="lbg"><aside class="lot'+(S.lotAnim?' enter':'')+'" role="dialog" aria-modal="true" aria-label="'+esc(u.lot)+'">'+lotInner(false)+'</aside></div>';
  }
  S.groups=load('gs-groups',[{id:'g1',name:'Errands'},{id:'g2',name:'House'},{id:'g3',name:'Hobbies'}]);S.lotGroup=null;
  function groupName(id){for(var i=0;i<S.groups.length;i++)if(S.groups[i].id===id)return S.groups[i].name;return ''}
  function lotSort(a,b){var da=dueOf(a),db=dueOf(b);if(da&&db)return da<db?-1:da>db?1:0;if(da)return -1;if(db)return 1;return (b.created||0)-(a.created||0)}
  function groupsView(u){
    var h='';
    if(S.lotGroup&&groupName(S.lotGroup)){
      var gid=S.lotGroup,list=S.tasks.filter(function(t){return !t.done&&t.g===gid}).sort(lotSort);
      h+='<div class="between"><button class="quiet" data-a="lgback">&larr; All groups</button><button class="quiet" data-a="lgdel" data-v="'+gid+'">Delete group</button></div><h3 class="lgtitle">'+esc(groupName(gid))+'</h3>';
      h+='<form class="add lotadd" data-a="tkquick" data-h="week" data-g="'+gid+'"><input type="text" id="tkq" placeholder="Add to '+esc(groupName(gid))+'" aria-label="Add to this group"><button type="submit">'+esc(u.parkIt)+'</button></form>';
      if(!list.length)h+='<div class="lotnote">Nothing in this group yet. Add something above, or pick this group when you edit a task.</div>';
      else{h+='<div class="spaces">';list.forEach(function(t,i){h+=bay(t,i+1,false)});h+='</div>'}
      return h;
    }
    h+=hint('groups','lotnote','Little lots for things that belong together. A task can be in one group and still show up in Weekly or Monthly.')+'<div class="lgrid">';
    S.groups.forEach(function(g){var n=S.tasks.filter(function(t){return !t.done&&t.g===g.id}).length;h+='<button class="lgcard" data-a="lgopen" data-v="'+g.id+'"><b>'+esc(g.name)+'</b><span>'+n+' task'+(n===1?'':'s')+'</span></button>'});
    h+='</div><form class="add lotadd" data-a="lgadd"><input type="text" id="lgnew" maxlength="24" placeholder="New group, e.g. Car" aria-label="New group name"><button type="submit">Add</button></form>';
    return h;
  }
  S.hints=load('gs-hints',{});
  function hint(id,cls,html){if(S.hints[id])return '';return '<div class="'+cls+' hint">'+html+'<button class="hintx" data-a="hintx" data-v="'+id+'" aria-label="Dismiss this tip">&times;</button></div>'}
  function lotInner(embedded){
    var u=U(),tab=S.lotTab;
    var h='<div class="between"><h2 class="lottitle">'+esc(u.lot)+'</h2>'+(embedded?'':'<button class="x lotx" data-a="lclose" aria-label="Close">&times;</button>')+'</div>';
    h+='<div class="subtabs lotabs" role="group" aria-label="Sections"><button data-a="lottab" data-v="day" aria-pressed="'+(tab==='day')+'">Daily</button><button data-a="lottab" data-v="week" aria-pressed="'+(tab==='week')+'">Weekly</button><button data-a="lottab" data-v="month" aria-pressed="'+(tab==='month')+'">Monthly</button><button data-a="lottab" data-v="groups" aria-pressed="'+(tab==='groups')+'">Groups</button></div>';
    if(tab==='groups')h+=groupsView(u);
    else{
      h+='<form class="add lotadd" data-a="tkquick" data-h="'+tab+'"><input type="text" id="tkq" placeholder="'+(tab==='day'?'Something for today':tab==='week'?'Something for this week':'Something for this month')+'" aria-label="Add something"><button type="submit">'+esc(u.parkIt)+'</button></form>'+hint('hold','lotnote','Tip: hold the button to fill in details first.');
      var list=S.tasks.filter(function(t){return !t.done&&(t.h||'week')===tab}).sort(function(a,b){
        var da=dueOf(a),db=dueOf(b);
        if(da&&db)return da<db?-1:da>db?1:0;
        if(da)return -1;if(db)return 1;
        return (b.created||0)-(a.created||0);
      });
      if(tab==='day')h+=hint('daily','lotnote','Daily is for things you mean to get to today. Anything left tonight slides into Weekly, unless you tag it Must do.');
      if(!list.length)h+='<div class="lotnote">An empty lot. Nice and quiet.</div>';
      else{h+='<div class="spaces">';list.forEach(function(t,i){h+=bay(t,i+1,false)});h+='</div>'}
    }
    var dn=S.tasks.filter(function(t){return t.done}).sort(function(a,b){return (b.doneAt||0)-(a.doneAt||0)});
    if(dn.length){h+='<details class="lotdone"><summary>Finished ('+dn.length+')</summary><div class="spaces">';dn.forEach(function(t){h+=bay(t,0,true)});h+='</div><button class="quiet" data-a="tkclear">Clear finished</button></details>'}
    return h;
  }
  function tkSheet(){
    var T=S.tk;if(!T)return '';
    var ttl=T.id?'Edit task':'Add a task';
    var h='<div class="backdrop" data-a="tkbg"><div class="sheet" role="dialog" aria-modal="true" aria-label="'+ttl+'"><div class="between"><h2 style="font-size:24px">'+ttl+'</h2><button class="x" data-a="tkclose" aria-label="Close">&times;</button></div>';
    if(T.err)h+='<div class="note" role="alert">'+esc(T.err)+'</div>';
    if(T.ask)h+='<div class="note askseries" role="alert"><b>This task repeats.</b> '+(T.ask==='del'?'Delete just this one, or stop it repeating too?':'Change just this one, or every time it comes back?')+'<div class="row" style="margin-top:10px"><button class="btn alt grow" data-a="tkscope" data-v="one">Just this one</button><button class="btn grow" data-a="tkscope" data-v="all">'+(T.ask==='del'?'Stop repeating':'Every time')+'</button></div><button class="quiet" data-a="tkscope" data-v="cancel">Cancel</button></div>';
    h+='<div class="grp"><div class="lab">What is it</div><input class="field" type="text" id="tk-title" value="'+esc(T.title)+'" placeholder="e.g. Call about the bill" aria-label="What is it"></div>';
    h+='<div class="grp"><div class="lab">Where it lives</div>'+evChips('tkh',T.h,[['day','Today'],['week','This week'],['month','This month']])+'</div>';
    h+=rptUI('tk',T.rpt||(T.rpt=rptNew()));
    if(S.groups.length)h+='<div class="grp"><div class="lab">Group (optional)</div>'+evChips('tkg',T.g||'',[['','None']].concat(S.groups.map(function(g){return [g.id,esc(g.name)]})))+'</div>';
    h+='<div class="grp"><div class="lab">How long might it take (optional)</div>'+evChips('tkmins',T.mins,[[0,'Not sure'],[5,'5 min'],[15,'15 min'],[30,'30 min'],[60,'1 hr'],[120,'2 hr+']])+'</div>';
    h+='<div class="grp"><div class="lab">How much it matters (optional)</div>'+evChips('tkw',T.w,[['small','A little'],['med','In between'],['big','A lot']])+'</div>';
    h+='<div class="grp"><div class="lab">A date, only if it really has one (optional)</div><input class="field" type="date" id="tk-due" value="'+esc(T.due)+'" aria-label="Date">'+(T.due?'<button class="quiet" data-a="tkclr" style="align-self:flex-start">No date</button>':'')+'</div>';
    h+='<div class="grp"><div class="lab">Tags (select any number)</div><div class="chips sm" role="group" aria-label="Tags">'+[['fun','A fun or creative one'],['nr','Not for random picks'],['bd','A big deal']].concat(T.h==='day'?[['must','Must do (stays in Daily)']]:[]).map(function(o){return '<button data-a="tktag" data-v="'+o[0]+'" aria-pressed="'+(!!T[o[0]])+'">'+o[1]+'</button>'}).join('')+'</div>'+(T.bd?'<p class="small">Big deals get extra encouragement when you start, and a bigger celebration when you finish.</p>':'')+'</div>';
    h+='<div class="grp"><div class="lab">Tiny steps (optional)</div>';
    if(T.steps.length){h+='<ul class="items" style="margin-top:0">';T.steps.forEach(function(x,i){
      h+='<li class="item'+(x.done?' done':'')+'"><button class="check" role="checkbox" aria-checked="'+x.done+'" aria-label="'+esc(x.t)+'" data-a="tkstepdone" data-i="'+i+'">'+(x.done?'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"/></svg>':'')+'</button><span class="t">'+esc(x.t)+'</span><button class="x" aria-label="Remove step" data-a="tkstepdel" data-i="'+i+'">&times;</button></li>';
    });h+='</ul>'}
    h+='<div class="add" style="margin-top:0"><input type="text" id="tk-step" placeholder="Add a step" aria-label="Add a step" value="'+esc(T.newStep)+'"><button type="button" data-a="tkstepadd">Add</button></div>';
    if(!S.noAI)h+='<button class="quiet" data-a="tkbreak" style="align-self:flex-start"'+(S.tkBusy?' disabled':'')+'>'+(S.tkBusy?'Thinking...':'Break it into tiny steps for me')+'</button>';
    else h+='<button class="quiet" data-a="tksuggest" style="align-self:flex-start">Suggest steps for me</button><p class="small">You can edit or delete any of them afterwards.</p>';
    h+='</div>';
    if(T.work&&T.work.length)h+='<p class="small">Worked on '+T.work.length+(T.work.length===1?' time':' times')+', most recently '+esc(new Date(T.work[T.work.length-1]).toLocaleDateString(undefined,{month:'short',day:'numeric'}))+'.</p>';
    h+='<button class="btn" data-a="tksave">Save</button>'+(T.id?'<button class="btn alt" data-a="tkgo">Start this now</button><button class="quiet" data-a="tkdel">Delete</button>':'')+'<button class="quiet" data-a="tkclose">Cancel</button></div></div>';
    return h;
  }
  function syncTk(){
    var T=S.tk;if(!T)return;rptSync('tk',T.rpt);
    [['tk-title','title'],['tk-due','due'],['tk-step','newStep']].forEach(function(p){var e=document.getElementById(p[0]);if(e)T[p[1]]=e.value});
  }
  var STEPIDEAS=[
    [/\b(call|phone|ring|text|email|e-mail|reply|respond|message|write back)\b/i,['Find the number or open the message','Write or say just the first line','Send it or press call']],
    [/\b(pay|bill|invoice|insurance|tax|taxes|form|paperwork|claim|renew|register|sign up)\b/i,['Find the login or the paper','Open it and put it where you can see it','Fill in just the first part','Finish and submit, or note what is still missing']],
    [/\b(book|schedule|appointment|reserve|reservation)\b/i,['Find the number or booking page','Check two times that could work','Book one']],
    [/\b(apply|application|resume|cv|cover letter|job)\b/i,['Open the document or the posting','Write one rough line, no editing','Work on it for ten minutes, then stop if you like']],
    [/\b(write|draft|essay|report|article|post|letter|notes)\b/i,['Open a blank page','Write one rough sentence','Ten minutes, messy is fine']],
    [/\b(clean|tidy|declutter|laundry|dishes|vacuum|sweep|mop|wipe|organi[sz]e|trash|bins?)\b/i,['Put on something to listen to','Set a five-minute timer','Do the nearest corner or one load','Stop when the timer does, or keep going']],
    [/\b(buy|shop|shopping|order|groceries|grocery|pick up|errand)\b/i,['Open the list or the site','Add the first three things','Check out, or grab your keys']],
    [/\b(exercise|workout|stretch|stretches|walk|run|gym|yoga|pt|physio)\b/i,['Get into the clothes or lay out the mat','Do two minutes','Decide if you want to keep going']],
    [/\b(art|draw|drawing|paint|sketch|craft|knit|crochet|sew|hobby|create|make)\b/i,['Get the supplies out where you can see them','Make one mark or one stitch','Ten minutes, no judging']],
    [/\b(plant|plants|water|watering|garden)\b/i,['Fill the watering can or glass','Do the nearest plant','Do the rest if you feel like it']],
    [/\b(cook|meal prep|bake|dinner|lunch|breakfast)\b/i,['Pick one thing to make','Get out the main ingredient','Start the first step']],
    [/\b(read|study|learn|course|class|homework)\b/i,['Get the book or open the page','Read or work for five minutes','Note where you stopped']]
  ];
  function suggestSteps(title){
    var t=title||'',hit=null;
    for(var i=0;i<STEPIDEAS.length;i++)if(STEPIDEAS[i][0].test(t)){hit=STEPIDEAS[i][1];break}
    return hit||['Get out or open whatever you need','Do the smallest first piece for two minutes','Decide if you want to keep going'];
  }
  function commitStep(){var T=S.tk,v=T.newStep.trim();if(v&&T.steps.length<12){T.steps.push({t:v.slice(0,80),done:false})}T.newStep=''}
  function finishNote(id){
    var bt=taskById(id);if(S.celeb===id)save('gs-harddone',ymd(new Date()));
    if(bt&&bt.bd){S.celeb=null;S.bigDone=id;render();setTimeout(function(){S.bigDone=null;if(S.doing===id)S.doing=null;render()},3600);celebrate(64);setTimeout(function(){celebrate(40)},700);toast('That was a big one, and you did it. Really.')}
    else if(S.celeb===id){S.celeb=null;render();celebrate();toast('The hard one first. That deserves a little parade.')}
    else{render();toast('Done. Nice.')}
  }
  function celebrate(n){
    var c=document.createElement('div');c.className='confetti';c.setAttribute('aria-hidden','true');
    for(var i=0;i<(n||28);i++){var p=document.createElement('i');p.style.left=(Math.random()*100)+'%';p.style.background='var(--c'+(i%8)+')';p.style.animationDelay=(Math.random()*.6)+'s';p.style.transform='rotate('+Math.floor(Math.random()*180)+'deg)';c.appendChild(p)}
    document.body.appendChild(c);setTimeout(function(){c.remove()},2800);
  }

  /* ---- planner view (On the clock): the whole day, hour by hour ---- */
  function planItem(x){
    if(x.k==='r'){var st=S.status[x.id];return '<button class="pi r'+(st==='done'?' done':st==='skip'?' skip':'')+'" data-a="ptog" data-v="'+x.id+'"><b>'+esc(nmOf(x.id))+'</b><small>'+fmtRange(x.start,x.dur)+'</small></button>'}
    var ev=x.ev;return '<button class="pi e'+(ev.by==='p'?' pj':'')+'" data-a="evedit" data-lp="evedit" data-v="'+esc(ev.id)+'"><b>'+(ev.by==='p'?'§P\u2019s: ':'')+esc(ev.title)+'</b><small>'+fmtRange(x.start,x.dur)+(ev.place?', '+esc(ev.place):'')+'</small></button>';
  }
  function plannerCard(){
    var tk=ymd(new Date()),now=SIM[S.part],items=[],rows='';
    ['morning','afternoon','evening'].forEach(function(p){partSteps(p).forEach(function(id){var sc=schedOf(id);if(sc)items.push({k:'r',id:id,start:sc.start,dur:TIMES[id][1]})})});
    evsOn(tk).forEach(function(ev){items.push({k:'e',ev:ev,start:tmin(ev.time),dur:ev.dur||60})});
    var H0=7,H1=22;
    for(var hr=H0;hr<=H1;hr++){
      var a=hr*60,b=a+60,cell='';
      items.filter(function(x){return hr===H0?x.start<b:hr===H1?x.start>=a:(x.start>=a&&x.start<b)}).sort(function(x,y){return x.start-y.start}).forEach(function(x){cell+=planItem(x)});
      items.forEach(function(x){if(x.k==='e'&&x.start<a&&x.start+x.dur>a)cell+='<span class="pi cont">'+esc(x.ev.title)+' continues</span>'});
      var here=now>=a&&now<b;
      rows+='<div class="hr"><span class="hl">'+fmt(a)+'</span><div class="hb">'+cell+(here?'<span class="nowline" style="top:'+Math.round((now-a)/60*100)+'%"><em>now</em></span>':'')+'</div></div>';
    }
    return '<div class="card"><div class="between"><h3>Today, hour by hour</h3><button class="addbtn" data-a="evnew">+ Add</button></div><div class="planner">'+rows+'</div><p class="small">Tap a routine step to check it off, or a plan to edit it.</p></div>';
  }

  /* ---- overview: the week or month at a glance ---- */
  function ovMonthStart(){var n=new Date();return new Date(n.getFullYear(),n.getMonth()+S.ovMo,1)}
  function wkEv(ev,k){
    var st=tmin(ev.time),end=st+(ev.dur||0);
    return '<button class="wkev'+(ev.withJ||ev.by==='p'?' wj':'')+'" data-a="evedit" data-lp="evedit" data-v="'+esc(ev.id)+'"><small>'+(ev.by==='p'?'§P\u2019s, ':'')+fmt(st)+(ev.dur?' to '+fmt(end):'')+'</small><b>'+esc(ev.title)+'</b>'+(ev.place?'<span class="small">'+esc(ev.place)+'</span>':'')+'</button>';
  }
  function ovAll(){
    return '<input class="field" type="search" id="plsearch" placeholder="Search plans" aria-label="Search plans" autocomplete="off" value="'+esc(S.pq||'')+'" style="margin:12px 0"><div id="plresults">'+plBody()+'</div>';
  }
  function plSearch(q){
    var tk=ymd(new Date()),ql=q.toLowerCase(),hits=[];
    function has(){for(var i=0;i<arguments.length;i++)if(arguments[i]&&String(fxt(arguments[i])).toLowerCase().indexOf(ql)>=0)return true;return false}
    S.events.forEach(function(ev){if(has(ev.title,ev.place,ev.prep,(ev.tags||[]).join(' ')))hits.push(ev)});
    var rr=S.reps.filter(function(r){return r.as==='ev'&&has(r.t)});
    var one=hits.filter(function(ev){return !ev.rpt}).map(function(ev){return {ev:ev,k:evDate(ev)}});
    var up=one.filter(function(x){return x.k>=tk}).sort(function(a,b){return a.k<b.k?-1:a.k>b.k?1:tmin(a.ev.time)-tmin(b.ev.time)});
    var past=one.filter(function(x){return x.k<tk}).sort(function(a,b){return a.k>b.k?-1:a.k<b.k?1:0});
    var rep=hits.filter(function(ev){return ev.rpt});
    if(!up.length&&!past.length&&!rep.length&&!rr.length)return '<div class="card"><p class="small">No plans match \u201c'+esc(q)+'\u201d.</p></div>';
    var h='<div class="card"><h3>Results</h3><div class="evlist">';
    up.forEach(function(x){h+=plRow(x.ev,plWhen(x))});
    rep.forEach(function(ev){h+=plRow(ev,repLabel({rep:ev.rpt.rep,days:ev.rpt.days,dom:ev.rpt.dom,mode:ev.rpt.mode,nth:ev.rpt.nth,dow:ev.rpt.dow,as:'ev',time:ev.time}))});
    rr.forEach(function(r){h+='<button class="ev nt" data-a="reedit" data-v="'+esc(r.id)+'"><span class="bd"><b>'+esc(r.t)+'</b><span class="small">'+esc(repLabel(r))+'</span></span></button>'});
    past.forEach(function(x){h+=plRow(x.ev,'Past: '+plWhen(x))});
    return h+'</div></div>';
  }
  function plRow(ev,sub){return '<button class="ev nt" data-a="evedit" data-lp="evedit" data-v="'+esc(ev.id)+'"><span class="bd"><b>'+esc(ev.title)+(ev.ex&&!S.demo?' <span class="small">(example)</span>':'')+'</b><span class="small">'+esc(sub)+'</span></span></button>'}
  function plWhen(x){var tk=ymd(new Date()),d=kDate(x.k),lbl=x.k===tk?'Today':x.k===ymd(addDays(new Date(),1))?'Tomorrow':d.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric',year:d.getFullYear()!==new Date().getFullYear()?'numeric':undefined});return lbl+(x.ev.time?', '+fmtRange(tmin(x.ev.time),x.ev.dur):'')+(x.ev.place?', '+x.ev.place:'')}
  function plBody(){
    if(S.pq&&S.pq.trim())return plSearch(S.pq.trim());
    var tk=ymd(new Date()),up=[],rep=[];
    S.events.forEach(function(ev){if(ev.by==='p')return;if(ev.rpt){rep.push(ev);return}var k=evDate(ev);if(k>=tk)up.push({ev:ev,k:k})});
    function byWhen(a,b){return a.k<b.k?-1:a.k>b.k?1:tmin(a.ev.time)-tmin(b.ev.time)}
    up.sort(byWhen);
    var row=plRow,when=plWhen;
    var wk=ymd(addDays(new Date(),6)),grp=[['Today',up.filter(function(x){return x.k===tk})],['This week',up.filter(function(x){return x.k>tk&&x.k<=wk})],['Further out',up.filter(function(x){return x.k>wk})]];
    var h='<div class="card"><h3>Coming up</h3>';
    if(up.length){grp.forEach(function(g){if(!g[1].length)return;h+='<div class="lab" style="margin-top:12px">'+g[0]+'</div><div class="evlist">';g[1].forEach(function(x){h+=row(x.ev,when(x))});h+='</div>'})}
    else h+='<p class="small">Nothing planned yet.</p>';
    h+='<button class="addbtn" data-a="evnew" style="margin-top:10px">+ Add a plan</button></div>';
    var rr=S.reps.filter(function(r){return r.as==='ev'});
    if(rep.length||rr.length){h+='<div class="card"><h3>Repeating</h3><div class="evlist">';
      rep.forEach(function(ev){h+=row(ev,repLabel({rep:ev.rpt.rep,days:ev.rpt.days,dom:ev.rpt.dom,mode:ev.rpt.mode,nth:ev.rpt.nth,dow:ev.rpt.dow,as:'ev',time:ev.time}))});
      rr.forEach(function(r){h+='<button class="ev nt" data-a="reedit" data-v="'+esc(r.id)+'"><span class="bd"><b>'+esc(r.t)+'</b><span class="small">'+esc(repLabel(r))+'</span></span></button>'});
      h+='</div></div>'}
    return h;
  }
  function ovWeek(){
    var h='<p class="small wkswipe">Swipe sideways for the rest of the week.</p><div class="wkrow" role="list">';
    for(var i=0;i<7;i++){
      var d=addDays(new Date(),i),k=ymd(d),evs=evsOn(k);
      h+='<div class="wkday'+(i===0?' today':'')+'" role="listitem"><div class="wkhd"><b>'+esc(dayLabel(k))+'</b>'+(i<2?'<span class="small">'+esc(d.toLocaleDateString(undefined,{month:'short',day:'numeric'}))+'</span>':'')+holidaysOn(k).map(function(n){return '<span class="holtag">'+esc(n)+'</span>'}).join('')+'</div>';
      if(!evs.length)h+='<p class="small">Open.</p>';
      else evs.forEach(function(ev){h+=wkEv(ev,k)});
      h+='<button class="addbtn wkadd" data-a="evnewon" data-v="'+k+'">+ Add</button></div>';
    }
    return h+'</div>';
  }
  function ovMonth(){
    var ms=ovMonthStart(),y=ms.getFullYear(),m=ms.getMonth(),label=ms.toLocaleDateString(undefined,{month:'long',year:'numeric'});
    var h='<div class="monthnav"><button class="navbtn" data-a="ovprev" aria-label="Previous month">&lsaquo;</button><h2>'+esc(label)+'</h2><button class="navbtn" data-a="ovnext" aria-label="Next month">&rsaquo;</button></div>';
    if(S.ovMo!==0||(S.ovDay&&S.ovDay!==ymd(new Date())))h+='<div class="row" style="justify-content:center;margin:-4px 0 8px"><button class="addbtn" data-a="ovtoday">Back to today</button></div>';
    h+='<div class="cal" role="grid" aria-label="'+esc(label)+'">';
    DOW.forEach(function(d){h+='<div class="dow" aria-hidden="true">'+d+'</div>'});
    var first=new Date(y,m,1).getDay(),dim=new Date(y,m+1,0).getDate(),tk=ymd(new Date());
    for(var b=0;b<first;b++)h+='<div class="day blank" aria-hidden="true"></div>';
    for(var d=1;d<=dim;d++){
      var key=y+'-'+pad(m+1)+'-'+pad(d),evs=evsOn(key),tiles='';
      var hl=holidaysOn(key),room=3;
      hl.slice(0,2).forEach(function(n){tiles+='<span class="mt hol">'+esc(n)+'</span>';room--});
      evs.slice(0,room).forEach(function(ev){tiles+='<span class="mt">'+esc(ev.title)+'</span>'});
      if(evs.length>room)tiles+='<span class="more">+'+(evs.length-room)+' more</span>';
      h+='<button class="day'+(key===tk?' today':'')+(S.ovDay===key?' sel':'')+'" data-a="ovday" data-k="'+key+'" aria-pressed="'+(S.ovDay===key)+'" aria-label="'+esc(ms.toLocaleDateString(undefined,{month:'long'}))+' '+d+', '+evs.length+' plans'+(hl.length?', '+esc(hl.join(', ')):'')+'"><span>'+d+'</span><span class="tiles">'+tiles+'</span></button>';
    }
    h+='</div>';
    if(S.ovDay){
      var sk=S.ovDay,e2=evsOn(sk);
      h+='<div class="card"><div class="between"><h3>'+esc(parseKey(sk).toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'}))+'</h3><button class="addbtn" data-a="evnewon" data-v="'+sk+'">+ Add</button></div>';
      holidaysOn(sk).forEach(function(n){h+='<p class="small"><span class="holtag">'+esc(n)+'</span></p>'});
      if(!e2.length)h+='<p class="small">Nothing planned.</p>';
      else{h+='<div class="evlist">';e2.forEach(function(ev){h+=evRow(ev,sk,SIM[S.part],true)});h+='</div>'}
      h+='</div>';
    }else h+='<p class="small">Tap a day to see its plans.</p>';
    return h;
  }
  function overview(){
    var u=U();
    var hd=head({title:'Plans',sub:'Your plans at a glance.'}),h='';
    h+='<div class="between" style="gap:10px"><div class="subtabs" role="group" aria-label="Plans range" style="flex:1"><button data-a="ovv" data-v="week" aria-pressed="'+(S.ovv==='week')+'">Week</button><button data-a="ovv" data-v="month" aria-pressed="'+(S.ovv==='month')+'">Month</button><button data-a="ovv" data-v="all" aria-pressed="'+(S.ovv==='all')+'">All plans</button></div><button class="psign" data-a="lot" aria-label="Open '+esc(u.lot)+'"><b>P</b><span>'+esc(u.lot)+'</span></button></div>';
    if(!S.demo&&!S.events.some(function(e){return !e.ex})&&!S.hints.jitplans)h+='<div class="card" style="margin:12px 0"><h3>Anything this week with a set time?</h3><p class="small">Appointments, classes, calls, dinners. Add one and it shows up on the right day, with a heads-up when it is time to get ready.</p><div class="row"><button class="btn grow" data-a="evnew">Add a plan</button></div><button class="quiet" data-a="hintx" data-v="jitplans">Not now</button></div>';
    return hd+'<div class="ovsplit"><aside class="lot lotside" aria-label="'+esc(u.lot)+'">'+lotInner(true)+'</aside><div class="ovmain">'+h+(S.ovv==='week'?ovWeek():S.ovv==='all'?ovAll():ovMonth())+(!S.demo&&S.events.some(function(e){return e.ex})?'<button class="quiet" data-a="clrexev">Clear example plans</button>':'')+'</div></div>';
  }

  /* ---- sample entries so the log calendar has something to show ---- */
  function seedSamples(){
    if(load('gs-seeded',false))return;
    var now=new Date(),add=[],every=['Rough day','Slept badly','Went to the gym','Watered plants'];
    function pick(a){return a[Math.floor(Math.random()*a.length)]}
    function many(a,n){var c=a.slice(),o=[];while(o.length<n&&c.length)o.push(c.splice(Math.floor(Math.random()*c.length),1)[0]);return o}
    [-1,0].forEach(function(mo){
      var y=new Date(now.getFullYear(),now.getMonth()+mo,1),last=mo===0?now.getDate():new Date(y.getFullYear(),y.getMonth()+1,0).getDate();
      for(var d=1;d<=last;d++){
        var r=Math.random(),n=r<.3?0:r<.78?1:2;
        for(var i=0;i<n;i++){
          var dt=new Date(y.getFullYear(),y.getMonth(),d,9+Math.floor(Math.random()*10),pick([0,15,30,45])),mig=S.trk.length&&Math.random()<.22;
          var en={label:mig?S.trk[0].name:pick(every),ts:dt.toISOString(),when:dt.toLocaleDateString(undefined,{month:'short',day:'numeric'})+', '+dt.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'}),smp:true};
          if(mig){
            en.trk=S.trk[0].id;en.sev=pick(SEVS);en.symp=many(optsOf('symp',en.trk),1+Math.floor(Math.random()*3));
            var tr=Math.floor(Math.random()*3);if(tr)en.trig=many(optsOf('trig',en.trk),tr);
            if(Math.random()<.6)en.meds=[pick(['Sample med A','Sample med B'])];
          }else colorOf(en.label);
          add.push(en);
        }
      }
    });
    S.log=S.log.concat(add).sort(function(a,b){return entryDate(a)-entryDate(b)});
    save('gs-log',S.log);save('gs-seeded',true);
  }

  function U(){var m=UIALT[S.logic];if(!m)return UI0;var o={},k;for(k in UI0)o[k]=UI0[k];for(k in m)o[k]=m[k];return o}
  function moodAlt(id){if(S.logic!=='mammal'||S.mood!=='dreamy')return null;if(id==='teeth')return {t:'Splash in the birdbath',s:'Teeth and face. A little splash and a little preening is plenty.'};if(id==='clothes')return {t:'Preen those feathers',s:'Out of pajamas and into something that feels like you.'};return null}
  function offId(id){if(id==='kidsam')return !(PROF&&PROF.kids&&PROF.kids.length);if(id==='checkin')return !(PROF&&PROF.others&&PROF.others.length);return !(PROF&&PROF.pet)&&(id==='muffin'||id==='muffinpm')}
  function stepOf(id){var b=STEPS[id],a=moodAlt(id)||(ALT[S.logic]&&ALT[S.logic][id]),o={},k;for(k in b)o[k]=b[k];if(a)for(k in a)o[k]=a[k];if(id==='meal'&&!(PROF&&PROF.pet)){if(creature()){o.t='Forage for food';o.s='The forest awaits. What is worth gathering?'}else{o.t='Breakfast';o.s='Fuel for your day. What are you having?'}}
    if(S.rtn.names[id])o.t=S.rtn.names[id];
    if(id==='lunch'&&!(PROF&&PROF.partner)){o.lunch=false;o.meal=true;o.t='Lunch';o.s='Time to eat something. Whatever is easy counts.'}
    return o}
  function nmOf(id){if(S.rtn.names[id])return S.rtn.names[id];if(id==='meal'&&!(PROF&&PROF.pet))return creature()?'Forage for food':'Breakfast';var a=moodAlt(id)||(ALT[S.logic]&&ALT[S.logic][id]);return a?(a.t||NAMES[id]):NAMES[id]}
  function schedOf(id){if(S.logic!=='clock'||!TIMES[id])return null;var b=TIMES[id],st=b[0]+S.shift+S.dayOff;return {start:st,label:fmt(st)+' to '+fmt(st+b[1])}}

  /* ---- tile stacks ---- */
  S.stacks=load('gs-stacks',null);if(!Array.isArray(S.stacks))S.stacks=[];
  function syncTrkStacks(){
    S.stacks=S.stacks.filter(function(x){return !x.builtin||trkById(x.id)});
    S.trk.slice().reverse().forEach(function(t){var st=stackById(t.id);if(!st)S.stacks.unshift({id:t.id,name:t.name,builtin:true,kids:[]});else st.name=t.name});
  }
  syncTrkStacks();
  /* the Good hobby session button became Went to the gym; past entries keep their name */
  (function(){var i=S.cats.indexOf('Good hobby session');if(i>=0){if(S.cats.indexOf('Went to the gym')<0)S.cats[i]='Went to the gym';else S.cats.splice(i,1);save('gs-cats',S.cats)}})();
  /* "Rough morning" was renamed "Rough day": carry old entries, colors and stacks over */
  (function(){var O='Rough morning',N='Rough day',ch=false;
    S.log.forEach(function(e){if(e.label===O){e.label=N;ch=true}});
    var ci=S.cats.indexOf(O);if(ci>=0){if(S.cats.indexOf(N)<0)S.cats[ci]=N;else S.cats.splice(ci,1);ch=true}
    if(S.colors[O]!==undefined){S.colors[N]=S.colors[O];delete S.colors[O];ch=true}
    S.stacks.forEach(function(x){var k=x.kids.indexOf(O);if(k>=0){if(x.kids.indexOf(N)<0)x.kids[k]=N;else x.kids.splice(k,1);ch=true}});
    if(ch){save('gs-log',S.log);save('gs-cats',S.cats);save('gs-colors',S.colors);save('gs-stacks',S.stacks)}
  })();
  S.openStacks=[];S.ns=null;
  function allTiles(){return S.cats}
  function stackById(id){for(var i=0;i<S.stacks.length;i++)if(S.stacks[i].id===id)return S.stacks[i];return null}
  function stackOf(label){for(var i=0;i<S.stacks.length;i++)if(S.stacks[i].kids.indexOf(label)>=0)return S.stacks[i];return null}
  function topTiles(){return allTiles().filter(function(c){return !stackOf(c)})}
  function removeKid(label){S.stacks.forEach(function(x){var i=x.kids.indexOf(label);if(i>=0)x.kids.splice(i,1)})}
  function cleanStacks(){
    var all=allTiles();
    S.stacks.forEach(function(x){x.kids=x.kids.filter(function(k){return all.indexOf(k)>=0})});
    S.stacks=S.stacks.filter(function(x){return x.builtin||x.kids.length});
    S.openStacks=S.openStacks.filter(function(id){return !!stackById(id)});
  }
  cleanStacks();
  function isOpen(st){return trkById(st.id)?S.f.sels.indexOf('trk:'+st.id)>=0:S.openStacks.indexOf(st.id)>=0}
  function stackSelCount(st){return st.kids.filter(function(k){return S.f.sels.indexOf(k)>=0}).length}

  /* ---- plans: appointments and other events ---- */
  var SIM={morning:615,afternoon:810,evening:1140}; /* prototype clock: 10:15, 1:30 PM, 7:00 PM */
  function pad(n){return (n<10?'0':'')+n}
  function ymd(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
  function addDays(d,n){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()+n);return x}
  function parseKey(k){var p=k.split('-');return new Date(+p[0],+p[1]-1,+p[2])}
  function tmin(t){var p=String(t).split(':');return (+p[0])*60+(+p[1]||0)}
  function fmt(m){m=((m%1440)+1440)%1440;var h=Math.floor(m/60),mm=m%60,ap=h>=12?'PM':'AM',h12=h%12||12;return h12+(mm?':'+pad(mm):'')+' '+ap}
  function fmtRange(st,dur){
    if(!dur)return fmt(st);
    var a=fmt(st),b=fmt(st+dur),ap=a.slice(-2);
    return (ap===b.slice(-2)?a.slice(0,-3):a)+' to '+b;
  }
  function dayLabel(k){
    var t=ymd(new Date());if(k===t)return 'Today';
    if(k===ymd(addDays(new Date(),1)))return 'Tomorrow';
    return parseKey(k).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});
  }
  S.events=load('gs-events',null);
  if(!Array.isArray(S.events))S.events=[
    {id:'e1',title:'Walk with a friend',ex:true,off:0,time:'12:00',dur:120,place:'',travel:20,prep:'Pack your gear',withJ:false,share:'full'},
    {id:'e2',title:'Dentist',ex:true,off:0,time:'15:00',dur:60,place:'Main Street clinic',travel:45,prep:'Bring your insurance card',withJ:false,share:'full'},
    {id:'e3',title:'Dinner out',ex:true,off:1,time:'19:00',dur:90,place:'',travel:15,prep:'',withJ:true,share:'full'},
    {id:'e4',title:'Farmers market',ex:true,off:-5,time:'09:00',dur:90,place:'',travel:10,prep:'Bring a tote bag',withJ:false,share:'full'},
    {id:'e5',title:'Yoga class',ex:true,off:-2,time:'18:00',dur:60,place:'Community center',travel:10,prep:'Bring a mat',withJ:false,share:'full'},
    {id:'e6',title:'Haircut',ex:true,off:3,time:'11:00',dur:60,place:'Salon on 5th',travel:15,prep:'',withJ:false,share:'full'},
    {id:'e7',title:'Call with family',ex:true,off:5,time:'19:30',dur:30,place:'',travel:0,prep:'',withJ:false,share:'full'},
    {id:'e8',title:'Book club',ex:true,off:8,time:'19:00',dur:90,place:'Library',travel:15,prep:'Finish the last chapter',withJ:false,share:'full'},
    {id:'e9',title:'Library books due',ex:true,off:9,time:'17:00',dur:15,place:'Library',travel:15,prep:'',withJ:false,share:'full'},
    {id:'e10',title:'Doctor follow-up',ex:true,off:11,time:'10:30',dur:45,place:'Health center',travel:25,prep:'Bring your list of questions',withJ:false,share:'full'},
    {id:'e11',title:'Coffee with a friend',ex:true,off:14,time:'10:00',dur:60,place:'Corner cafe',travel:10,prep:'',withJ:false,share:'full'},
    {id:'e12',title:'Oil change',ex:true,off:17,time:'13:00',dur:60,place:'Auto shop',travel:15,prep:'',withJ:false,share:'full'},
    {id:'e13',title:'Movie night',ex:true,off:20,time:'20:00',dur:150,place:'',travel:0,prep:'Pick the movie ahead of time',withJ:false,share:'full'},
    {id:'e14',title:'Pick up prescription',ex:true,off:23,time:'16:00',dur:20,place:'Pharmacy',travel:10,prep:'',withJ:false,share:'full'},
    {id:'e15',title:'Birthday dinner',ex:true,off:25,time:'18:30',dur:120,place:'Italian place downtown',travel:20,prep:'Bring the card',withJ:false,share:'full'}
  ];
  S.ev=null;S.evReady={};S.evHide={};
  function evDate(ev){return ev.ex?ymd(addDays(new Date(),ev.off||0)):ev.date}
  function repEvs(k){var p=k.split('-'),d=new Date(+p[0],+p[1]-1,+p[2]),o=[];S.reps.forEach(function(r){if(r.as==='ev'&&repDue(r,d))o.push({id:'rv_'+r.id,rv:r.id,title:r.t,date:k,time:r.time||'09:00',dur:r.dur||60,place:'',travel:0,prep:'',withJ:false,share:'full'})});return o}
  function kDate(k){var p=k.split('-');return new Date(+p[0],+p[1]-1,+p[2])}
  function evOccur(k){var o=[];S.events.forEach(function(ev){if(!ev.rpt){if(evDate(ev)===k)o.push(ev);return}if(k<ev.date||(ev.skip&&ev.skip.indexOf(k)>=0)||!repDue(ev.rpt,kDate(k)))return;var x={},q;for(q in ev)x[q]=ev[q];x.id=ev.id+'|'+k;x.date=k;o.push(x)});return o}
  function evsOn(k){return evOccur(k).concat(repEvs(k)).sort(function(a,b){return tmin(a.time)-tmin(b.time)})}
  function leaveBy(ev){return tmin(ev.time)-(ev.travel?ev.travel+10:0)}
  function urgentEv(){
    var now=SIM[S.part],tk=ymd(new Date()),best=null;
    evsOn(tk).forEach(function(ev){
      var st=tmin(ev.time);
      if(ev.by==='p'||now>=st||S.evReady[ev.id]||S.evHide[ev.id])return;
      if(now>=leaveBy(ev)-U().win&&!best)best=ev;
    });
    return best;
  }
  function tag(t,c){return '<span class="tag'+(c?' '+c:'')+'">'+esc(t)+'</span>'}
  function evRow(ev,key,now,qt){
    var st=tmin(ev.time),end=st+(ev.dur||0),isToday=key===ymd(new Date());
    var past=isToday&&now>=(ev.dur?end:st+30),cur=isToday&&!past&&now>=st,tags='';
    if(ev.by==='p')tags+=tag('§P\u2019s');
    if(ev.ex)tags+=tag('Example');
    (ev.tags||[]).forEach(function(t){if(t!==ev.title)tags+=tag(t)});
    if(cur)tags+=tag('Now','now');
    if(isToday&&!past&&!cur&&ev.travel)tags+=tag('Leave by '+fmt(leaveBy(ev)),'now');
    if(S.evReady[ev.id]&&!past)tags+=tag('Ready');
    if(ev.withJ)tags+=tag('With §P');
    if(ev.share==='generic')tags+=tag('Shows as "Appointment"');
    if(ev.share==='hidden')tags+=tag('Private');
    return '<button class="ev'+(past?' past':'')+'" data-a="evedit" data-lp="evedit" data-v="'+esc(ev.id)+'"><span class="tm">'+fmt(st)+'<small>'+((isToday||qt)?(ev.dur?'to '+fmt(end):''):esc(dayLabel(key)))+'</small></span><span class="bd"><b>'+esc(ev.title)+'</b>'+(ev.place?'<span class="small">'+esc(ev.place)+'</span>':'')+(tags?'<span class="tags">'+tags+'</span>':'')+'</span></button>';
  }
  function plans(){
    var tk=ymd(new Date()),now=SIM[S.part],td=evsOn(tk);
    var h='<div class="card"><div class="between"><h3>'+esc(U().plans)+'</h3><button class="addbtn" data-a="evnew">+ Add</button></div>';
    holidaysOn(tk).forEach(function(n){h+='<p class="small">Today is <b>'+esc(n)+'</b>.</p>'});
    if(!td.length)h+='<p class="small">Nothing on the calendar today. Nothing to get ready for.</p>';
    else{h+='<div class="evlist">';td.forEach(function(ev){h+=evRow(ev,tk,now)});h+='</div>'}
    var up='';
    for(var i=1;i<=7;i++){var k=ymd(addDays(new Date(),i));evsOn(k).forEach(function(ev){up+=evRow(ev,k,now)})}
    if(up)h+='<div class="dayhead">'+esc(U().up)+'</div><div class="evlist">'+up+'</div>';
    return h+'</div>';
  }
  S.evtags=load('gs-evtags',['Appointment','Hobby','Dinner out','Call','Errand']);
  S.ytl=load('gs-ytl','');S.mus=load('gs-mus',{sp:true,yt:true});
  function ytLink(){return S.ytl||'https://youtube.com/playlist?list=PLObp3SAH0hnY&si=vXpF5x_9PXO8uPWp'}
  function rptNew(){return {rep:'none',days:[],dom:1}}
  function rptUI(k,R,noNone){
    var h='<div class="grp"><div class="lab">Repeats</div><div class="chips sm">';
    (noNone?[['w','Weekly'],['m','Monthly']]:[['none','Does not repeat'],['w','Weekly'],['m','Monthly']]).forEach(function(o){h+='<button data-a="rpt" data-k="'+k+'" data-v="'+o[0]+'" aria-pressed="'+(R.rep===o[0])+'">'+o[1]+'</button>'});
    h+='</div>';
    if(R.rep==='w'){h+='<div class="chips sm" style="margin-top:8px" role="group" aria-label="Days">';DAYN.forEach(function(d,i){h+='<button data-a="rptday" data-k="'+k+'" data-v="'+i+'" aria-pressed="'+(R.days.indexOf(i)>=0)+'">'+d+'</button>'});h+='</div>'}
    else if(R.rep==='m'){
      var md=R.mode||'dom';
      h+='<div class="chips sm" style="margin-top:8px">';[['dom','Same date'],['nth','Same weekday'],['4w','Every 4 weeks']].forEach(function(o){h+='<button data-a="rptmode" data-k="'+k+'" data-v="'+o[0]+'" aria-pressed="'+(md===o[0])+'">'+o[1]+'</button>'});h+='</div>';
      if(md==='dom')h+='<div class="lab" style="margin-top:8px">On day of the month</div><input class="field" type="number" min="1" max="31" id="'+k+'-dom" value="'+R.dom+'" aria-label="Day of the month"><p class="small">In shorter months it lands on the last day.</p>';
      else if(md==='nth'){h+='<div class="lab" style="margin-top:8px">On the</div><div class="chips sm">';[[1,'1st'],[2,'2nd'],[3,'3rd'],[4,'4th'],[5,'Last']].forEach(function(o){h+='<button data-a="rptnth" data-k="'+k+'" data-v="'+o[0]+'" aria-pressed="'+(R.nth===o[0])+'">'+o[1]+'</button>'});h+='</div><div class="chips sm" style="margin-top:6px">';DAYN.forEach(function(d,i){h+='<button data-a="rptdow" data-k="'+k+'" data-v="'+i+'" aria-pressed="'+(R.dow===i)+'">'+d+'</button>'});h+='</div><p class="small">'+esc(nthLabel(R))+' of every month.</p>'}
      else h+='<p class="small">Every 28 days, starting from '+(k==='ev'?'the plan&rsquo;s date':'today')+'.</p>';
    }
    return h+'</div>';
  }
  function nthLabel(R){return 'The '+(R.nth===5?'last':ord(R.nth||1))+' '+['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][R.dow||0]}
  function rptCopy(R){return {rep:R.rep,days:(R.days||[]).slice(),dom:R.dom||1,mode:R.mode||'dom',nth:R.nth,dow:R.dow,anchor:R.anchor}}
  function rptObj(k){return k==='ev'?(S.ev&&S.ev.rpt):k==='tk'?(S.tk&&S.tk.rpt):S.re}
  function rptSyncAll(k){if(k==='ev')syncEv();else if(k==='tk')syncTk();else syncRe()}
  function rptSync(k,R){var d=document.getElementById(k+'-dom');if(d&&R)R.dom=Math.max(1,Math.min(31,parseInt(d.value,10)||1))}
  /* ---- reading a plan out of a pasted or shared message ----
     Plain pattern matching, no AI: it pulls what it can (day, time, place, length, a title)
     and the plan editor opens for a quick check. Anything it is unsure about stays blank. */
  function parsePlan(raw,now){
    now=now||new Date();
    var text=String(raw||'').replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim().slice(0,600),low=text.toLowerCase(),out={found:[]};
    var today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
    var DAYS=['sun','mon','tue','wed','thu','fri','sat'];
    var MON=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    function setDay(d,why){if(out.date)return;out.date=d;out.found.push(why)}
    /* day */
    var m;
    if(/\b(today|tonight|this (morning|afternoon|evening))\b/.test(low))setDay(today,'today');
    else if(/\b(tomorrow|tmrw|tmr|tomorow)\b/.test(low))setDay(addDays(today,1),'tomorrow');
    if(!out.date&&(m=low.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.? (\d{1,2})(st|nd|rd|th)?\b/)||low.match(/\b(\d{1,2})(st|nd|rd|th)? (?:of )?(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\b/))){
      var mo,dd;if(isNaN(+m[1])){mo=MON.indexOf(m[1].slice(0,3));dd=+m[2]}else{mo=MON.indexOf(m[3].slice(0,3));dd=+m[1]}
      if(mo>=0&&dd>=1&&dd<=31){var x=new Date(today.getFullYear(),mo,dd);if(x<today)x=new Date(today.getFullYear()+1,mo,dd);setDay(x,x.toLocaleDateString(undefined,{month:'short',day:'numeric'}))}
    }
    if(!out.date&&(m=low.match(/\b(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/))){
      var mo2=+m[1]-1,dd2=+m[2];if(mo2>=0&&mo2<12&&dd2>=1&&dd2<=31){var yr=m[3]?(+m[3]<100?2000+(+m[3]):+m[3]):today.getFullYear(),x2=new Date(yr,mo2,dd2);if(!m[3]&&x2<today)x2=new Date(yr+1,mo2,dd2);setDay(x2,x2.toLocaleDateString(undefined,{month:'short',day:'numeric'}))}
    }
    if(!out.date&&(m=low.match(/\bthe (\d{1,2})(st|nd|rd|th)\b/))){var dd3=+m[1];if(dd3>=1&&dd3<=31){var x3=new Date(today.getFullYear(),today.getMonth(),dd3);if(x3<today)x3=new Date(today.getFullYear(),today.getMonth()+1,dd3);setDay(x3,x3.toLocaleDateString(undefined,{month:'short',day:'numeric'}))}}
    /* a weekday name only counts when no explicit date was given ("Wed Dec 2" means Dec 2) */
    if(!out.date&&(m=low.match(/\b(next |this |on )?(sun|mon|tue|tues|wed|weds|thu|thur|thurs|fri|sat)(day|nesday|sday|urday|rsday)?\b/))){
      var wd=DAYS.indexOf(m[2].slice(0,3)),diff=(wd-today.getDay()+7)%7;
      if(m[1]==='next '&&diff===0)diff=7;
      var d=addDays(today,diff);setDay(d,d.toLocaleDateString(undefined,{weekday:'long'}));
    }
    if(!out.date&&/\b(this|the) weekend\b/.test(low)){var dw=today.getDay();setDay(addDays(today,dw===0||dw===6?0:6-dw),'this weekend')}
    /* time */
    var eve=/\b(dinner|drinks|tonight|evening|night|movie|party|bar|concert|show|game night|date)\b/.test(low),mins=null;
    if(/\bnoon\b/.test(low))mins=720;
    if(mins===null&&(m=low.match(/(?:^|[^\d\/:])(\d{1,2})(?::(\d{2}))?\s?(am|pm)?\s?(?:-|\u2013|to)\s?(\d{1,2})(?::(\d{2}))?\s?(am|pm)?(?![\d\/:])/))){
      var h1=+m[1],m1=+(m[2]||0),h2=+m[4],m2=+(m[5]||0),a1=m[3]||m[6]||'',a2=m[6]||'';
      if(h1>=1&&h1<=12&&h2>=1&&h2<=12){
        function to24(h,a,fb){if(a==='pm'&&h<12)return h+12;if(a==='am')return h===12?0:h;return fb(h)}
        var s1=to24(h1,m[3]||'',function(h){return a2==='pm'&&h<=h2?h+12:a2==='am'?h:(h<=7||eve?h+12:h===12?12:h)})*60+m1,s2=to24(h2,a2,function(h){return h<=7||eve||s1>=720?(h<12?h+12:h):h})*60+m2;
        if(s2<=s1)s2+=720;if(s2-s1>0&&s2-s1<=720){mins=s1;out.dur=s2-s1}
      }
    }
    if(mins===null){
      var re=/(^|[^\d\/:])(at |@ ?|around |by |til |till |until |~ ?)?(\d{1,2})(?::(\d{2}))? ?((?:am|pm|a\.m\.|p\.m\.|a|p)(?![a-z]))?(ish)?(?![\d\/:])/g,best=null;
      while((m=re.exec(low))){
        var hh=+m[3],mm=m[4]?+m[4]:0,ap=m[5]?m[5].charAt(0):'',strong=!!(m[2]||m[4]||ap||m[6]);
        if(!strong||hh<1||hh>23||mm>59)continue;
        var after=low.slice(m.index+m[0].length,m.index+m[0].length+10);
        if(!ap&&!m[4]&&/^ ?(people|ppl|of us|min|minutes|hours|hrs|hr|days|weeks|bucks|dollars|%)/.test(after))continue;
        if(ap==='p'&&hh<12)hh+=12;else if(ap==='a'&&hh===12)hh=0;
        else if(!ap&&hh<=12){if(hh===12)hh=12;else if(hh<=7||eve)hh+=12}
        best=hh*60+mm;break;
      }
      mins=best;
    }
    if(mins!==null){out.time=pad(Math.floor(mins/60))+':'+pad(mins%60);out.found.push(fmt(mins))}
    /* how long */
    if((m=low.match(/\bfor (an?|one|\d+(?:\.\d+)?|half an?) ?(hour|hr|hours|hrs|minutes|mins|min)\b/))){
      var q=m[1]==='a'||m[1]==='an'||m[1]==='one'?1:/half/.test(m[1])?0.5:+m[1],dur=/^h/.test(m[2])?Math.round(q*60):Math.round(q);
      if(dur>0&&dur<=720){out.dur=dur}
    }
    if(out.dur)out.found.push(fmtMins(out.dur));
    /* where */
    var STOP=/^(least|all|first|last|most|once|some point|the moment|the latest|the earliest|noon|midnight|night)\b/i;
    var pre=/(?:^|[\s(])(?:at\s+|@\s*)(?![\d\s])([^,.!?;\n()]{2,50}?)(?=\s+(?:on|at|around|by|for|tomorrow|tonight|today|this|next|instead|then|if|so|after|before|with|lol|haha)\b|[,.!?;\n()]|$)/gi;
    while((m=pre.exec(text))){var pl=m[1].trim().replace(/\s+(ok|okay|yeah|pls|please)$/i,'');if(STOP.test(pl))continue;out.place=pl.charAt(0).toUpperCase()+pl.slice(1);break}
    if(out.place)out.found.push(out.place);
    /* what it is */
    var KW=[['game night','Game night'],['brunch','Brunch'],['breakfast','Breakfast'],['lunch','Lunch'],['dinner','Dinner'],['coffee','Coffee'],['drinks','Drinks'],['happy hour','Happy hour'],['movies?','Movie'],['birthday','Birthday'],['party','Party'],['concert','Concert'],['wedding','Wedding'],['baby shower','Baby shower'],['bbq|barbecue|cookout','Cookout'],['picnic','Picnic'],['hike','Hike'],['dentist','Dentist'],['doctor|dr\\.? appt','Doctor'],['haircut|hair appt','Haircut'],['appointment|appt','Appointment'],['meeting','Meeting'],['interview','Interview'],['yoga','Yoga'],['gym|workout','Workout'],['class','Class'],['practice','Practice'],['playdate','Playdate'],['date night','Date night'],['call\\b|phone call|facetime','Call'],['game\\b','Game']];
    for(var i=0;i<KW.length;i++){if(new RegExp('\\b('+KW[i][0]+')').test(low)){out.title=KW[i][1];break}}
    var GEN={Class:1,Game:1,Practice:1,Meeting:1,Call:1,Party:1,Birthday:1,Appointment:1,Concert:1,Interview:1};
    if(!out.title||GEN[out.title]){
      var kw=out.title;
      var rest=text
        .replace(/\b(next |this |on )?(sun|mon|tue|tues|wed|weds|thu|thur|thurs|fri|sat)(day|nesday|sday|urday|rsday)?\b\.?( (morning|afternoon|evening|night))?/gi,' ')
        .replace(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.? \d{1,2}(st|nd|rd|th)?\b|\b\d{1,2}(st|nd|rd|th)? (of )?(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\b/gi,' ')
        .replace(/\b\d{1,2}\/\d{1,2}(\/\d{2,4})?\b|\bthe \d{1,2}(st|nd|rd|th)\b/gi,' ')
        .replace(/\b(today|tonight|tomorrow|tmrw|tmr|this (morning|afternoon|evening)|(this|the) weekend)\b/gi,' ')
        .replace(/(\b(at|around|by|until|till|til)\s+|@\s*|~\s*)?\b\d{1,2}(:\d{2})?\s?(am|pm|a\.m\.|p\.m\.|a|p)?(ish)?\b|\bnoon\b/gi,' ')
        .replace(/\bfor (an?|one|\d+(\.\d+)?|half an?) ?(hour|hr|hours|hrs|minutes|mins|min)\b/gi,' ').replace(/\s?(-|\u2013|to)\s?(?=\s|$)/g,' ');
      if(out.place)rest=rest.replace(new RegExp('(\\bat\\s+|@\\s*)?'+out.place.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),' ');
      var FILL=/^(hey|hi|hello|yo|so|ok|okay|omg|ooh|oh|lol|haha+|yeah|yes|yep|sure|maybe|sounds good|great|cool|also|and|then)\b[\s,!]*/i,ASK=/^(do you |did you |wanna |want to |you want to |are you free (to )?|would you (like|want) to |can you |let's |lets |we should |going to |gonna |i'm |im |i am |we're |were )/i,JUNK=/^(works|work|ok|okay|sure|maybe|good|fine|great|cool|yes|no|free|it|that)$/i;
      var segs=rest.split(/[.!?\n]/).map(function(x){x=x.replace(/[,;:\-–—]+/g,' ').replace(/\s+/g,' ').trim();var p;do{p=x;x=x.replace(FILL,'').replace(ASK,'').trim()}while(x!==p);return x.replace(/^(get|grab|go to|go|have|do)\s+/i,'').replace(/\s+\b(on|at|around|by|this|next|works|work)$/i,'').trim()}).filter(function(x){return x&&!JUNK.test(x)});
      var pick=kw?segs.filter(function(x){return x.toLowerCase().indexOf(kw.toLowerCase())>=0})[0]:segs[0];
      if(pick&&pick.length>40)pick=pick.slice(0,40).replace(/\s+\S*$/,'')+'\u2026';
      if(pick&&pick.length>=2){out.title=pick.charAt(0).toUpperCase()+pick.slice(1);out.titleGuess=!kw}
      else if(!kw)out.title='';
    }
    out.text=text;
    return out;
  }
  /* fill the open plan editor from a message; only fields the message actually had are touched */
  function fillFromText(txt){
    if(!S.ev)S.ev=newEv();var E=S.ev,r=parsePlan(txt);
    if(r.title&&(!r.titleGuess||!E.title))E.title=r.title;
    if(r.date){var k=ymd(r.date);E.dk=k===ymd(new Date())?'today':k===ymd(addDays(new Date(),1))?'tomorrow':'other';E.dateVal=k}
    if(r.time)E.time=r.time;
    if(r.place)E.place=r.place;
    if(r.dur){E.dur=r.dur;E.durOther=undefined}
    E.from={found:r.found,guess:!!r.titleGuess,text:r.text};E.pasteOpen=false;E.pasteMsg='';
  }
  function newEv(){return {rpt:rptNew(),tags:[],id:null,by:'me',title:'',dk:'today',dateVal:'',time:'',dur:60,place:'',travel:0,prep:'',withJ:false,share:'full',err:''}}
  function syncEv(){
    var E=S.ev;if(!E)return;rptSync('ev',E.rpt);var tr=document.getElementById('ev-trm'),trh=document.getElementById('ev-trh');if(E.trOther&&tr)E.travel=Math.max(0,Math.min(600,(parseInt(trh&&trh.value,10)||0)*60+(parseInt(tr.value,10)||0)));var dh=document.getElementById('ev-durh'),dm=document.getElementById('ev-durm');if(E.durOther&&dh&&dm){E.dur=Math.max(0,Math.min(23,parseInt(dh.value,10)||0))*60+Math.max(0,Math.min(59,parseInt(dm.value,10)||0))}
    [['ev-title','title'],['ev-time','time'],['ev-place','place'],['ev-prep','prep'],['ev-date','dateVal']].forEach(function(p){var e=document.getElementById(p[0]);if(e)E[p[1]]=e.value});
  }
  function evChips(act,cur,list){
    var h='<div class="chips sm">';
    list.forEach(function(o){h+='<button data-a="'+act+'" data-v="'+o[0]+'" aria-pressed="'+(String(cur)===String(o[0]))+'">'+o[1]+'</button>'});
    return h+'</div>';
  }
  function evSheet(){
    var E=S.ev;if(!E)return '';
    var ttl=E.id?'Edit plan':(E.by==='p'?'Add to §P&rsquo;s schedule':'Add a plan');
    var h='<div class="backdrop" data-a="evbg"><div class="sheet" role="dialog" aria-modal="true" aria-label="'+ttl+'"><div class="between"><h2 style="font-size:24px">'+ttl+'</h2><button class="x" data-a="evclose" aria-label="Close">&times;</button></div>';
    if(E.err)h+='<div class="note" role="alert">'+esc(E.err)+'</div>';
    if(E.ask)h+='<div class="note askseries" role="alert"><b>This plan repeats.</b> '+(E.ask==='del'?'Delete':'Change')+' just this one, or every one?<div class="row" style="margin-top:10px">'+(E.occ?'<button class="btn alt grow" data-a="evscope" data-v="one">Just '+esc(dayLabel(E.occ))+'</button>':'')+'<button class="btn grow" data-a="evscope" data-v="all">Every one</button></div><button class="quiet" data-a="evscope" data-v="cancel">Cancel</button></div>';
    if(!E.id&&E.by!=='p'){
      if(E.from){
        var fd=E.from.found;
        h+='<div class="note pastenote">'+(fd.length?'Filled in from your message: <b>'+esc(fd.join(', '))+'</b>. Check it over, then save.'+(E.from.guess?' The title is a guess from the first line.':''):'No day or time turned up in that message, so it went into the title. Fill in the rest.')+'<details class="tuck"><summary>Show the message</summary><p class="small">'+esc(E.from.text)+'</p></details></div>';
      }else{
        h+='<div class="pastebox"><button class="btn alt" data-a="evpaste">Paste from a message</button><p class="small">Copy a text about plans, then tap this. The app fills in what it can find.</p>';
        if(E.pasteOpen)h+=(E.pasteMsg?'<p class="small" role="status">'+esc(E.pasteMsg)+'</p>':'')+'<textarea class="field" id="ev-pastetxt" rows="3" placeholder="Paste the message here" aria-label="Message to read"></textarea><button class="btn alt" data-a="evparse">Fill in the plan</button>';
        h+='</div>';
      }
    }
    if(E.by==='p')h+='<p class="small">Something on §P&rsquo;s day you want to plan around, like a lunch break or a late shift. It shows with a tag, and it never sends you a leave-by reminder.</p>';
    h+='<div class="grp"><div class="lab">What is it</div><input class="field" type="text" id="ev-title" value="'+esc(E.title)+'" placeholder="e.g. Dentist" aria-label="What is it"><div class="chips sm" role="group" aria-label="Tags" style="margin-top:8px">';
    S.evtags.forEach(function(q){h+='<button data-a="evquick" data-v="'+esc(q)+'" aria-pressed="'+((E.tags||[]).indexOf(q)>=0)+'">'+esc(q)+'</button>'});
    h+='</div></div>';
    h+='<div class="grp"><div class="lab">When</div>'+evChips('evday',E.dk,[['today','Today'],['tomorrow','Tomorrow'],['other','Another day']]);
    if(E.dk==='other')h+='<input class="field" type="date" id="ev-date" value="'+esc(E.dateVal)+'" aria-label="Date" style="margin-top:8px">';
    h+='<div class="tfield" style="margin-top:8px"><input class="field" type="time" id="ev-time" required value="'+esc(E.time)+'" aria-label="Start time"></div></div>';
    h+=rptUI('ev',E.rpt||(E.rpt=rptNew()));
    var DPRE=[0,30,60,90,120];if(E.durOther===undefined)E.durOther=DPRE.indexOf(+E.dur)<0;
    h+='<div class="grp"><div class="lab">How long</div>'+evChips('evdur',E.durOther?'other':E.dur,[[0,'No end time'],[30,'30 min'],[60,'1 hr'],[90,'1.5 hr'],[120,'2 hr'],['other','Other']]);
    if(E.durOther)h+='<div class="durin"><input class="field" type="number" min="0" max="23" inputmode="numeric" id="ev-durh" value="'+Math.floor((E.dur||0)/60)+'" aria-label="Hours"><span>hr</span><input class="field" type="number" min="0" max="59" step="5" inputmode="numeric" id="ev-durm" value="'+((E.dur||0)%60)+'" aria-label="Minutes"><span>min</span></div>';
    h+='</div>';
    h+='<div class="grp"><div class="lab">Where (optional)</div><input class="field" type="text" id="ev-place" value="'+esc(E.place)+'" placeholder="e.g. Main Street clinic" aria-label="Where"></div>';
    if(E.by!=='p')h+='<div class="grp"><div class="lab">Travel time (optional)</div>'+(function(){var TP=[0,15,30,45];if(E.trOther===undefined)E.trOther=TP.indexOf(+E.travel)<0;return evChips('evtravel',E.trOther?'other':E.travel,[[0,'None'],[15,'15 min'],[30,'30 min'],[45,'45 min'],['other','Other']])+(E.trOther?'<div class="durin"><input class="field" type="number" min="0" max="10" inputmode="numeric" id="ev-trh" value="'+Math.floor((E.travel||0)/60)+'" aria-label="Travel hours"><span>hr</span><input class="field" type="number" min="0" max="59" step="5" inputmode="numeric" id="ev-trm" value="'+((E.travel||0)%60)+'" aria-label="Travel minutes"><span>min</span></div>':'')})()+'<p class="small">Used to tell you when to start getting ready. It adds 10 minutes of buffer.</p></div>';
    if(E.by!=='p')h+='<div class="grp"><div class="lab">Before you go (optional)</div><input class="field" type="text" id="ev-prep" value="'+esc(E.prep)+'" placeholder="e.g. Bring your insurance card" aria-label="Before you go"></div>';
    if(E.by!=='p')h+='<div class="grp"><div class="lab">§P</div><div class="chips sm"><button data-a="evwj" aria-pressed="'+E.withJ+'">§P is coming too</button></div>'
      +'<div class="lab" style="margin-top:8px">What §P sees</div>'+evChips('evshare',E.share,[['full','Show details'],['generic','Just "Appointment"'],['hidden','Keep private']])+'</div>';
    h+='<button class="btn" data-a="evsave">Save</button>'+(E.id?'<button class="quiet" data-a="evdel">Delete this plan</button>':'')+'<button class="quiet" data-a="evclose">Cancel</button></div></div>';
    return h;
  }
  var SQ=[
    {t:'Are you sure?',y:'Yes',n:"No, I'll do it"},
    {t:'Okay, but are you really sure?',y:"What? Yeah, I'm sure",n:'Ugh, fine'},
    {t:'I hate to keep annoying you, but you said you would do it...',y:'What is going on with these popups??',n:"I'll do it but just to stop the popups"},
    {t:'So... are you going to do it?',y:'No.',n:'This popup slop actually pissed me off enough to actually do it'},
    {t:'PLEASE????',n:'Oh my god'}
  ];
  function forgotSheet(){
    if(!S.fg)return '';
    return '<div class="backdrop mid" data-a="fgbg"><div class="sheet" role="alertdialog" aria-modal="true" aria-label="Forgot medications"><h2 style="font-size:24px;text-align:center">Uh oh!</h2><p class="small" style="text-align:center;margin:0">It\'ll get noted in the log in case you need to know later.</p><button class="btn" data-a="fgok">Okay</button></div></div>';
  }
  function catSheet(){
    if(!S.ce)return '';
    return '<div class="backdrop mid" data-a="cebg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Edit category"><h2 style="font-size:22px;text-align:center">Edit category</h2><input class="field" type="text" id="ce-name" maxlength="40" value="'+esc(S.ce.name)+'" aria-label="Category name"><button class="btn" data-a="cesave">Save name</button><button class="quiet" style="text-align:center" data-a="cedel">Take this category away</button><button class="quiet" style="text-align:center" data-a="cecancel">Cancel</button></div></div>';
  }
  function skipSheet(){
    if(!S.sq)return '';
    var q=S.sq.id==='clothes'?SQ[0]:SQ[S.sq.n];
    return '<div class="backdrop mid" data-a="sqbg"><div class="sheet" role="alertdialog" aria-modal="true" aria-label="'+esc(q.t)+'"><h2 style="font-size:24px;text-align:center">'+esc(q.t)+'</h2>'+(q.y?'<button class="btn" data-a="sqyes">'+esc(q.y)+'</button>':'')+(q.n?'<button class="quiet" style="text-align:center" data-a="sqno">'+esc(q.n)+'</button>':'')+'</div></div>';
  }
  function nameSheet(){
    if(!S.ns)return '';
    var st=stackById(S.ns.id);if(!st)return '';
    return '<div class="backdrop" data-a="nbg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Name this stack"><h2 style="font-size:22px">Name this stack</h2><p class="small">It holds: '+esc(st.kids.join(', '))+'.</p><input class="field" type="text" id="stackname" maxlength="24" value="'+esc(S.ns.name)+'" aria-label="Stack name"><button class="btn" data-a="namestack">Save name</button><button class="quiet" data-a="unstack" data-v="'+esc(st.id)+'">Ungroup these tiles</button><button class="quiet" data-a="ncancel">Keep the name "'+esc(st.name)+'"</button></div></div>';
  }
  function focusName(){var i=document.getElementById('stackname');if(i){i.focus();i.select()}}
  function toggleSel(l){var i=S.f.sels.indexOf(l);if(i>=0){S.f.sels.splice(i,1);if(l.indexOf('trk:')===0)delete S.f.td[l.slice(4)]}else S.f.sels.push(l)}

  function colorOf(label){
    if(S.colors[label]===undefined){var n=Object.keys(S.colors).length;S.colors[label]=n%8;save('gs-colors',S.colors)}
    return 'var(--c'+(S.colors[label]%8)+')';
  }
  function steps(){return lowMode()?floorSteps(S.part):partSteps(S.part)}
  function nextId(){var a=steps();for(var i=0;i<a.length;i++){if(!S.status[a[i]])return a[i]}return null}
  function toast(m){var t=document.getElementById('toast');t.textContent=fxt(m);t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(function(){t.hidden=true},3200)}
  function keepAll(fn){var m={};document.querySelectorAll('input[type=text],input[type=time],input[type=date]').forEach(function(i){if(i.id)m[i.id]=i.value});fn();Object.keys(m).forEach(function(id){var e=document.getElementById(id);if(e)e.value=m[id]})}

  /* after a few days, offer a look at how the other modes would say the next step */
  S.startDay=load('gs-startday',null);if(PROF&&!S.startDay){S.startDay=ymd(new Date());save('gs-startday',S.startDay)}
  function modeCard(){
    if(S.demo||S.hints.jitmode||!S.startDay||S.logic!=='gentle'||lowMode()||S.doing)return '';
    if((new Date()-parseKey(S.startDay))/864e5<3)return '';
    var id=nextId()||partSteps(S.part)[0];if(!id)return '';
    var was=S.logic,h='<div class="card"><h3>Want the app to talk differently?</h3><p class="small">Here is how each mode would put your next step. Tap one to try it.</p>';
    ['gentle','clock','tiny'].forEach(function(k){
      S.logic=k;var st=stepOf(id),sc=schedOf(id);S.logic=was;
      h+='<button class="opt" data-a="jitmode" data-v="'+k+'" aria-pressed="'+(was===k)+'"><span><b>'+esc(LOGICS[k].name)+'</b><span class="small">\u201c'+esc(st.t+(sc?', '+sc.label:''))+'\u201d'+(st.s?' '+esc(st.s):'')+'</span></span></button>';
    });
    return h+'<button class="quiet" data-a="hintx" data-v="jitmode">Keep it as is</button></div>';
  }
  function roughRow(u){return (S.part==='morning'&&!lowMode())?'<div class="row"><button class="quiet" data-a="rough">'+esc(u.rough)+'</button></div>':''}
  function today(){
    var u=U(),d=new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});
    var P=PARTS[S.part];
    var h=head({eyebrow:d,title:u.greet(P.label),def:1});
    if(creature()){h+='<div class="sim"><small>How are you feeling today?</small><div class="seg mood">';Object.keys(MOODS).forEach(function(k){h+='<button data-a="mood" data-v="'+k+'" aria-pressed="'+(S.mood===k)+'">'+MOODS[k].name+'</button>'});h+='</div></div>'}
    if(lowMode())h+='<div class="note">'+esc(u.lowNote).replace('Bear minimum','<em class="pun">Bear</em> minimum')+'</div>';
    var id=nextId(),ue=urgentEv();
    if(ue){
      var ust=tmin(ue.time),when=ue.travel?'Leave by '+fmt(leaveBy(ue))+' to be there at '+fmt(ust)+(ue.place?', '+ue.place:'')+'.':'Starts at '+fmt(ust)+(ue.place?', '+ue.place:'')+'.';
      h+='<section class="hero" aria-live="polite"><div class="kicker">Heads up</div><h2>Get ready for '+esc(ue.title)+'</h2><p class="sub">'+esc(when)+'</p>'+(ue.prep?'<p class="sub"><b>Before you go:</b> '+esc(ue.prep)+'</p>':'')
        +'<div class="row"><button class="btn grow" data-a="evready" data-v="'+esc(ue.id)+'">I am ready</button><button class="btn alt grow" data-a="evedit" data-lp="evedit" data-v="'+esc(ue.id)+'">Edit or cancel</button></div><div class="row"><button class="quiet" data-a="evhide" data-v="'+esc(ue.id)+'">Show my routine for now</button></div></section>';
      if(S.doing&&taskById(S.doing))h+=doingHero(taskById(S.doing));
    }else if(S.doing&&taskById(S.doing)){
      h+=doingHero(taskById(S.doing));
    }else if(id){
      var st=stepOf(id),sc=schedOf(id);
      h+='<section class="hero" aria-live="polite"><div class="kicker">'+esc(sc?u.next+', '+sc.label:u.next)+'</div><h2>'+esc(st.t)+'</h2>'+(st.s?'<p class="sub">'+esc(st.s)+'</p>':'')+'<div class="row">';
      if(st.meal){
        h+='<button class="btn grow" data-a="done" data-v="'+id+'">'+esc(u.eaten)+'</button><a class="btn alt grow" href="https://www.google.com/search?q=easy+'+(id==='dinner'?'dinner':id==='lunch'?'lunch':'breakfast')+'+ideas" target="_blank" rel="noopener" data-a="recime">'+esc(u.food)+'</a>';
      }else if(st.lunch){
        h+='<a class="btn grow" href="'+esc(smsHref('Lunch?'))+'" data-a="lunch">'+esc(u.lunchBtn)+'</a><button class="btn alt grow" data-a="done" data-v="'+id+'">'+esc(u.eaten)+'</button>';
      }else{
        h+='<button class="btn grow" data-a="done" data-v="'+id+'">'+esc(st.c)+'</button>';
      }
      h+='</div><div class="row">';
      if(id==='dailymeds')h+='<button class="quiet" data-a="forgot">Oops! I forgot</button>';
      if(st.lunch)h+='<button class="quiet" data-a="lunchsolo">'+esc(u.solo)+'</button>';
      if(!isFloor(id))h+='<button class="quiet" data-a="skip" data-v="'+id+'">'+esc(u.skip)+'</button>';
      h+='</div>';
      if(S.logic==='clock')h+='<div class="row"><button class="quiet" data-a="slide">Running behind? Slide the rest 15 min later</button>'+(S.shift?'<button class="quiet" data-a="unslide">Reset times</button>':'')+'</div>';
      h+=roughRow(u)+'</section>';
    }else{
      var dn=(DONEALT[S.logic]&&DONEALT[S.logic][S.part])||P.done;
      h+='<section class="hero"><div class="kicker">'+esc(u.allset)+'</div><h2>'+esc(dn.t)+'</h2><p class="sub">'+esc(dn.s)+'</p>'+roughRow(u)+'</section>';
    }
    h+=dailyCard();
    if(S.logic!=='clock')h+=plans();
    if(!id&&!S.doing)h+=parkCard();
    if(S.logic==='clock'){h+=plannerCard()}else{
    h+='<div class="card"><h3>'+esc(u.routine(S.part))+'</h3><ul class="steps">';
    var cur=nextId();
    steps().forEach(function(sid){
      var s=S.status[sid],sc2=schedOf(sid);
      var cls=s==='done'?'done':s==='skip'?'skipped':sid===cur?'now':'';
      var stt=s==='done'?'done':s==='skip'?'skipped':sid===cur?'next':'';
      if(!s&&sc2)stt=(sid===cur?'next, ':'')+fmt(sc2.start);
      h+='<li class="'+cls+'" data-a="stepclick" data-lp="rtedit" data-v="'+sid+'" role="button" tabindex="0" aria-label="'+esc(nmOf(sid))+(s==='done'?', done. Tap to undo':s==='skip'?', skipped. Tap to bring it back':', tap to go to the card')+'"><span class="dot"></span><span class="nm">'+esc(nmOf(sid))+'</span><em class="st">'+esc(stt)+'</em></li>';
    });
    h+='</ul></div>';
    }
    if(id&&!S.doing)h+=parkCard();
    h+=modeCard();
    if(S.mus.sp||S.mus.yt||S.mus.am)h+='<div class="sect"><h3>'+esc(u.music)+'</h3><div class="music">'+(S.mus.sp?'<a class="btn alt" href="https://open.spotify.com" target="_blank" rel="noopener">Spotify</a>':'')+(S.mus.am?'<a class="btn alt" href="https://music.apple.com" target="_blank" rel="noopener">Apple Music</a>':'')+(S.mus.yt?'<a class="btn alt" href="'+esc(ytLink())+'" target="_blank" rel="noopener">YouTube playlist</a>':'')+'</div><button class="quiet linkbtn musset" data-a="musset">Change or remove music options in settings</button></div>';
    return h;
  }

  /* sample lists: the starter lists and their marked items. Anything you added yourself is kept. */
  var SAMPLE_LISTS=['xmas','movies','hobbies','groc','holiday','gifts','books','places'];
  function sampleItem(it){return /\(sample item\)$/.test(it.t)||it.t==='Gift idea for §P'}
  function syncExp(){var b=document.querySelector('[data-a=lexp]');if(!b)return;var ds=document.querySelectorAll('details.lcard');b.textContent=Array.prototype.some.call(ds,function(d){return !d.open})?'Expand all':'Collapse all'}
  document.addEventListener('toggle',function(e){if(e.target.classList&&e.target.classList.contains('lcard'))syncExp()},true);
  function itTxt(it){return S.demo?String(it.t).replace(/ \(sample item\)$/,''):it.t}
  function hasSampleLists(){return S.lists.some(function(L){return L.items.some(sampleItem)||(SAMPLE_LISTS.indexOf(L.id)>=0&&!L.items.length)})}
  function lists(){
    var edAll=S.lmode===true,ed=edAll;
    var h=head({title:'Lists',sub:'Separate from your day, and nothing here is due. Tap '+U().parkIt+' on any item to send it to '+lotThe()+', and Home will suggest it when there\u2019s time.'});
    h+='<div class="between" style="justify-content:flex-end;gap:8px">'+(S.lists.length>1?'<button class="expall" data-a="lexp" aria-label="Expand or collapse all lists">Expand all</button>':'')+'<button class="psign" data-a="lot" aria-label="Open '+esc(U().lot)+'"><b>P</b><span>'+esc(U().lot)+'</span></button></div>';
    if(!S.demo&&!S.lists.length&&!S.hints.jitlists){
      S.jl=S.jl||[];
      h+='<div class="card"><h3>What lists do you keep in your Notes app?</h3><p class="small">Pick any and they will be here, ready to fill. Nothing on a list is ever due.</p><div class="chips">';
      ['Groceries','Gift ideas','Movies to watch','Books to read','Places to go','Things to buy'].forEach(function(n){h+='<button type="button" data-a="jl-tog" data-v="'+esc(n)+'" aria-pressed="'+(S.jl.indexOf(n)>=0)+'">'+esc(n)+'</button>'});
      h+='</div><div class="row" style="margin-top:12px"><button class="btn grow" data-a="jl-make"'+(S.jl.length?'':' disabled')+'>Make these lists</button></div><button class="quiet" data-a="hintx" data-v="jitlists">Not now</button></div>';
    }
    if(!S.demo&&hasSampleLists())h+=hint('lists','note','Sample items are marked. Check them off, park them, or edit them.');
    var CK='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"/></svg>';
    S.lists.forEach(function(L,li){
      var ed=edAll||S.lmode===L.id;
      var n=L.items.filter(function(i){return !i.done}).length;
      h+='<details class="card lcard"'+(li===0||ed?' open':'')+' data-id="'+L.id+'"><summary data-lp="ledit" data-l="'+li+'"><span>'+esc(L.name)+'</span><span class="count">'+n+' item'+(n===1?'':'s')+'</span></summary><ul class="items">'+(ed?'<li class="item"><input class="lsedit ltitle" type="text" data-l="'+li+'" value="'+esc(L.name)+'" maxlength="40" aria-label="List name"></li>':'');
      L.items.forEach(function(it,ii){
        if(ed){h+='<li class="item"><input class="lsedit" type="text" data-l="'+li+'" data-i="'+ii+'" value="'+esc(itTxt(it))+'" maxlength="120" aria-label="Item"><button class="x" aria-label="Delete item" data-a="del" data-l="'+li+'" data-i="'+ii+'">&times;</button></li>';return}
        h+='<li class="item'+(it.done?' done':'')+'" data-lp="itopen" data-l="'+li+'" data-i="'+ii+'"><button class="check" role="checkbox" aria-checked="'+it.done+'" aria-label="'+esc(itTxt(it))+'" data-a="tick" data-l="'+li+'" data-i="'+ii+'">'+(it.done?CK:'')+'</button><span class="t">'+esc(itTxt(it))+'</span>'+(it.done?'':'<button class="lpk'+(it.parked?' on':'')+'" aria-pressed="'+!!it.parked+'" aria-label="'+(it.parked?esc(U().parked)+'. Tap to take it back out of '+esc(lotThe()):'Move to '+esc(lotThe()))+'" data-a="lpark" data-l="'+li+'" data-i="'+ii+'">'+(it.parked?esc(U().parked):esc(U().parkIt))+'</button>')+'<button class="swdel" data-a="del" data-l="'+li+'" data-i="'+ii+'" tabindex="-1" aria-hidden="true">Delete</button></li>';
      });
      h+='</ul>'+(ed?'<button class="quiet ldel" data-a="ldellist" data-l="'+li+'">Delete this list</button>'+(edAll?'':'<button class="btn alt" data-a="lmodeoff" style="margin-top:6px">Done editing</button>'):'<form class="add" data-a="additem" data-l="'+li+'"><input type="text" id="add-'+L.id+'" placeholder="Add to '+esc(L.name)+'" aria-label="Add to '+esc(L.name)+'"><button type="submit">Add</button></form>')+'</details>';
    });
    h+='<form class="card" data-a="newlist"><b>Start a new list</b><div class="add" style="margin-top:0"><input type="text" id="newlist" placeholder="e.g. Pet store, Gift ideas" aria-label="New list name"><button type="submit">Create</button></div><button type="button" class="quiet linkbtn" data-a="lmode">'+(edAll?'Done editing':'Edit an existing list')+'</button></form>';
    if(!S.demo&&hasSampleLists())h+='<button class="quiet" data-a="clrexl">Clear sample lists</button>';
    return h;
  }

  /* picker for meds / triggers / symptoms: tap saved chips, or add a new one */
  function pickUI(kind,scope,sel,tid){
    var K=KINDS[kind],O=optsOf(kind,tid),h='<div class="grp"><div class="lab">'+K.label+' (optional)</div>';
    if(O.length){
      h+='<div class="chips sm" role="group" aria-label="'+K.label+'">';
      O.forEach(function(n){h+='<button data-a="togopt" data-k="'+kind+'" data-s="'+scope+'" data-t="'+esc(tid)+'" data-v="'+esc(n)+'" aria-pressed="'+(sel.indexOf(n)>=0)+'">'+esc(n)+'</button>'});
      h+='</div>';
    }
    h+='<form class="add" data-a="addopt" data-k="'+kind+'" data-s="'+scope+'" data-t="'+esc(tid)+'" style="margin-top:0"><input type="text" id="new-'+scope+'-'+kind+'-'+esc(tid)+'" placeholder="'+K.add+'" aria-label="'+K.add+'"><button type="submit">Add</button></form>'+suggUI(kind,scope,tid)+'</div>';
    return h;
  }
var SUGG={meds:['Rescue med','OTC painkiller']};
  function suggUI(kind,scope,tid){
    var l=(SUGG[kind]||[]).filter(function(s){return optsOf(kind,tid).every(function(x){return x.toLowerCase()!==s.toLowerCase()})});
    if(!l.length)return '';
    var h='<div class="medsugg" role="group" aria-label="Suggestions"><span class="small">Suggestions</span>';
    l.forEach(function(s){h+='<button type="button" data-a="sugopt" data-k="'+kind+'" data-s="'+scope+'" data-t="'+esc(tid)+'" data-v="'+esc(s)+'">'+esc(s)+'</button>'});
    return h+'</div>';
  }
  function selOf(scope,kind,tid){return scope==='rp'?S.rp.meds:tdOf(tid)[kind]}
  function sevUI(cur,act,tid){
    var h='<div class="grp"><div class="lab">How bad (optional)</div><div class="chips sm">';
    SEVS.forEach(function(v){h+='<button data-a="'+act+'" data-t="'+esc(tid||'')+'" data-v="'+v+'" aria-pressed="'+(cur===v)+'"><span class="sw" style="background:'+SEVCOL[v]+'"></span>'+v+'</button>'});
    return h+'</div></div>';
  }
  function groupCount(tid){var t=tdOf(tid);return (t.sev?1:0)+t.symp.length+t.trig.length+t.meds.length}

  function monthStart(){var n=new Date();return new Date(n.getFullYear(),n.getMonth()+S.mo,1)}
  function dkey(t){return t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate()}
  function entryDate(en){return en.ts?new Date(en.ts):new Date()}
  function calendar(ms,byDay,tileColor,label){
    var y=ms.getFullYear(),m=ms.getMonth();
    var h='<div class="cal" role="grid" aria-label="'+esc(label)+'">';
    DOW.forEach(function(d){h+='<div class="dow" aria-hidden="true">'+d+'</div>'});
    var first=new Date(y,m,1).getDay(),dim=new Date(y,m+1,0).getDate(),tk=dkey(new Date());
    for(var b=0;b<first;b++)h+='<div class="day blank" aria-hidden="true"></div>';
    for(var d=1;d<=dim;d++){
      var key=y+'-'+(m+1)+'-'+d,list=byDay[key]||[];
      var cls='day'+(key===tk?' today':'')+(S.day===key?' sel':'');
      var tiles='';
      list.slice(0,4).forEach(function(r){tiles+='<span class="tile" style="background:'+tileColor(r.en)+'"></span>'});
      if(list.length>4)tiles+='<span class="more">+'+(list.length-4)+'</span>';
      h+='<button class="'+cls+'" data-a="day" data-k="'+key+'" aria-pressed="'+(S.day===key)+'" aria-label="'+esc(ms.toLocaleDateString(undefined,{month:'long'}))+' '+d+', '+list.length+' logged"><span>'+d+'</span><span class="tiles">'+tiles+'</span></button>';
    }
    return h+'</div>';
  }
  function entryLines(en){
    var l=[];
    if(en.sev)l.push(en.sev);
    if(en.symp&&en.symp.length)l.push('Symptoms: '+en.symp.join(', '));
    if(en.trig&&en.trig.length)l.push('Triggers: '+en.trig.join(', '));
    if(en.meds&&en.meds.length)l.push('Medications: '+en.meds.join(', '));
    if(!l.length&&en.detail)l.push(en.detail);
    return l;
  }
  function counts(rows,field){var c={};rows.forEach(function(r){(r.en[field]||[]).forEach(function(n){c[n]=(c[n]||0)+1})});return Object.keys(c).map(function(k){return [k,c[k]]}).sort(function(a,b){return b[1]-a[1]})}

  function tileBtn(c,from){
    var on=S.f.sels.indexOf(c)>=0;
    if(S.catEdit)return '<button class="cated" data-a="catedit" data-v="'+esc(c)+'"><span class="sw" style="background:'+colorOf(c)+'"></span>'+esc(c)+'<em aria-hidden="true">&#9998;</em></button>';
    return '<button data-a="chip" data-v="'+esc(c)+'" data-drag="'+esc(c)+'"'+(from?' data-from="'+esc(from)+'"':' data-drop-tile="'+esc(c)+'"')+' aria-pressed="'+on+'"><span class="sw" style="background:'+colorOf(c)+'"></span>'+esc(c)+'</button>';
  }
  function stackBtn(st){
    var isT=!!trkById(st.id),open=isOpen(st),sel=stackSelCount(st),n=(isT?groupCount(st.id):0)+sel,sw='';
    if(st.kids.length){sw='<span class="kss" aria-hidden="true">';st.kids.slice(0,4).forEach(function(k){sw+='<i class="ks" style="background:'+colorOf(k)+'"></i>'});sw+='</span>'}
    var pressed=isT?' aria-pressed="'+open+'"':'';
    return '<button class="gchip" data-a="stack" data-v="'+esc(st.id)+'" data-drop-stack="'+esc(st.id)+'"'+pressed+' aria-expanded="'+open+'">'+STACK+'<span>'+esc(st.name)+'</span>'+sw+(n?'<span class="gcount" aria-label="'+n+' selected">'+n+'</span>':'')+CHEV+'</button>';
  }
  function stackPanel(st){
    var mig=!!trkById(st.id),title=mig?st.name+' details':st.name,td=mig?tdOf(st.id):null;
    var h='<div class="gpanel" role="group" aria-label="'+esc(title)+'" data-drop-stack="'+esc(st.id)+'"><div class="gtitle">'+STACK+'<b>'+esc(title)+'</b>'+(mig?'<span class="small">all optional</span>':'<button class="quiet" style="margin-left:auto" data-a="rename" data-v="'+esc(st.id)+'">Rename</button>')+'</div>';
    if(mig)h+=sevUI(td.sev,'sev',st.id)+pickUI('symp','log',td.symp,st.id)+pickUI('trig','log',td.trig,st.id)+pickUI('meds','log',td.meds,st.id);
    if(st.kids.length){
      h+='<div class="grp"><div class="lab">'+(mig?'Also in this stack':'Pick any of these')+'</div><div class="chips sm">';
      st.kids.forEach(function(k){h+=tileBtn(k,st.id)});
      h+='</div><p class="small">Press and hold a tile, then drag it out to take it out of the stack.</p></div>';
    }
    if(!mig)h+='<button class="quiet" data-a="unstack" data-v="'+esc(st.id)+'">Ungroup these tiles</button>';
    return '<div class="gslide'+(S.justOpen===st.id?' anim':'')+'">'+h+'</div></div>';
  }

  function logview(){
    var ms=monthStart(),y=ms.getFullYear(),m=ms.getMonth(),tv=trkById(S.lv)?S.lv:(S.lv==='migraine'&&trkById('mig')?'mig':null),T=trkById(tv),mig=!!T;
    var label=ms.toLocaleDateString(undefined,{month:'long',year:'numeric'});
    var h=head({title:'Log',sub:'Optional. Only what you choose to add.'})+lotRow();
    if(!S.demo&&!S.log.some(function(e){return !e.smp})&&!S.hints.jitlog){
      if(!S.jg)S.jg=S.cats.slice();
      var jo=['Rough day','Slept badly','Workout','Took a walk','Watered plants','Hobby time','Social time','Good day'];S.cats.forEach(function(c){if(jo.indexOf(c)<0)jo.push(c)});
      h+='<div class="card"><h3>What would you like to keep track of?</h3><p class="small">These become one-tap buttons below. Logging is always optional, and you can add or remove buttons any time.</p><div class="chips">';
      jo.forEach(function(n){h+='<button type="button" data-a="jg-tog" data-v="'+esc(n)+'" aria-pressed="'+(S.jg.indexOf(n)>=0)+'">'+esc(n)+'</button>'});
      h+='</div><div class="row" style="margin-top:12px"><button class="btn grow" data-a="jg-save">Use these</button></div><button class="quiet" data-a="hintx" data-v="jitlog">Not now</button></div>';
    }
    if(!S.demo&&S.log.some(function(e){return e.smp}))h+=hint('logsample','note','Some entries here are sample data, so the calendar has something to show. <button class="quiet" data-a="rmsample">Remove sample entries</button>');

    h+='<div class="card"><h3>Log something</h3>';
    if(S.day){var dq=S.day.split('-');h+='<p class="small">Adding to '+esc(new Date(+dq[0],+dq[1]-1,+dq[2]).toLocaleDateString(undefined,{month:'short',day:'numeric'}))+'. Tap the day again to go back to right now.</p>'}
    h+='<p class="small">Pick as many as you like. Stacked tiles hold more options. To make your own stack, press and hold a tile, then drag it onto another tile.</p><div class="chipflow">';
    var seg='',flow='';
    S.stacks.forEach(function(st){seg+=stackBtn(st);if(isOpen(st)){flow+='<div class="chips">'+seg+'</div>'+stackPanel(st);seg=''}});
    topTiles().forEach(function(c){seg+=tileBtn(c,'')});
    if(seg)flow+='<div class="chips">'+seg+'</div>';
    h+=flow+'</div>';
    h+='<button class="quiet" data-a="catmode" style="align-self:flex-start">'+(S.catEdit?'Done editing categories':'Edit categories')+'</button>'+(S.catEdit?'<p class="small">Tap a tile to rename it or take it away. Past entries stay in your log either way.</p>':'');
    h+='<input class="field" type="text" id="custom" placeholder="Or track something new" aria-label="Track something new"><button class="btn" data-a="savelog">Save</button></div>';

    if(S.trk.length){h+='<div class="subtabs" role="group" aria-label="Log view"><button data-a="lv" data-v="everyday" aria-pressed="'+(!mig)+'">Everyday</button>';S.trk.forEach(function(t){h+='<button data-a="lv" data-v="'+esc(t.id)+'" aria-pressed="'+(tv===t.id)+'">'+esc(t.name)+'</button>'});h+='</div>'}
    h+='<div class="monthnav"><button class="navbtn" data-a="prevmo" aria-label="Previous month">&lsaquo;</button><h2>'+esc(label)+'</h2><button class="navbtn" data-a="nextmo" aria-label="Next month"'+(S.mo>=0?' disabled':'')+'>&rsaquo;</button></div>';

    var rows=[];S.log.forEach(function(en,i){var t=entryDate(en);if(t.getFullYear()===y&&t.getMonth()===m&&(mig?entTrk(en)===tv:!entTrk(en)))rows.push({en:en,i:i,t:t,k:dkey(t)})});
    var labels=[];rows.forEach(function(r){if(labels.indexOf(r.en.label)<0)labels.push(r.en.label)});
    var vis=mig?rows:rows.filter(function(r){return !S.hide[r.en.label]});
    var byDay={};vis.forEach(function(r){(byDay[r.k]=byDay[r.k]||[]).push(r)});

    h+=calendar(ms,byDay,mig?function(en){return SEVCOL[en.sev]||'var(--c7)'}:function(en){return colorOf(en.label)},label);
    if(mig){
      h+='<div class="legend">';SEVS.forEach(function(v){h+='<span><i class="sw" style="background:'+SEVCOL[v]+'"></i>'+v+'</span>'});h+='<span><i class="sw" style="background:var(--c7)"></i>Not rated</span></div>';
    }else if(labels.length){
      h+='<details class="filter" data-f="1"'+(S.filt?' open':'')+'><summary>Filter the calendar</summary><div>';
      labels.forEach(function(l){h+='<label class="fl"><input type="checkbox" data-a="tog" data-v="'+esc(l)+'"'+(S.hide[l]?'':' checked')+'><span class="sw" style="background:'+colorOf(l)+'"></span>'+esc(l)+'</label>'});
      h+='</div></details>';
    }

    if(mig&&rows.length){
      var days={};rows.forEach(function(r){days[r.k]=1});
      var nd=Object.keys(days).length;
      h+='<div class="card"><h3>This month</h3><p class="small">'+esc(T.name)+' on '+nd+' day'+(nd===1?'':'s')+', '+rows.length+' entr'+(rows.length===1?'y':'ies')+' in all. Just counts, so you can see it at a glance or bring it to an appointment.</p>';
      var sc={};rows.forEach(function(r){var k=r.en.sev||'Not rated';sc[k]=(sc[k]||0)+1});
      h+='<div class="grp"><div class="lab">How bad</div>';
      SEVS.concat(['Not rated']).forEach(function(k){if(!sc[k])return;h+='<div class="brow"><span>'+k+'</span><span class="small">'+sc[k]+' &times;</span><span class="bar"><i style="width:'+Math.round(100*sc[k]/rows.length)+'%;background:'+(SEVCOL[k]||'var(--c7)')+'"></i></span></div>'});
      h+='</div>';
      [['symp','Symptoms'],['trig','Triggers'],['meds','Medications']].forEach(function(g){
        var c=counts(rows,g[0]);if(!c.length)return;
        h+='<div class="grp"><div class="lab">'+g[1]+'</div>';
        c.forEach(function(p){h+='<div class="brow"><span>'+esc(p[0])+'</span><span class="small">'+p[1]+' &times;</span><span class="bar"><i style="width:'+Math.round(100*p[1]/rows.length)+'%"></i></span></div>'});
        h+='</div>';
      });
      h+='</div>';
    }

    var shown=S.day?vis.filter(function(r){return r.k===S.day}):vis;
    if(S.day){
      var dp=S.day.split('-'),dt=new Date(+dp[0],+dp[1]-1,+dp[2]);
      h+='<div class="between"><h3 style="font-size:18px">'+esc(dt.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'}))+'</h3><button class="quiet" data-a="clearday">Show whole month</button></div>';
    }
    if(!shown.length){
      h+='<div class="note">'+(S.day?'Nothing logged this day.':rows.length?'Everything is filtered out above.':mig?'Nothing for '+esc(T.name)+' this month. On a rough day, tapping the '+esc(T.name)+' tile above and Save is a whole entry. Details are always optional.':'Nothing logged this month. That is fine. Entries show up here as colored tiles when you add them.')+'</div>';
    }else if(!S.day){
      h+='<p class="small">Tap a day on the calendar to see what you logged.</p>';
    }else{
      shown.slice().reverse().forEach(function(r){
        var sw=mig?(SEVCOL[r.en.sev]||'var(--c7)'):colorOf(r.en.label);
        var lines=entryLines(r.en);
        h+='<div class="entry"><span class="sw" style="background:'+sw+'"></span><div class="e"><b>'+esc(mig?T.name:r.en.label)+'</b>';
        lines.forEach(function(l){h+='<span class="small">'+esc(l)+'</span>'});
        h+='<span class="small">'+esc(r.en.when)+'</span></div><button class="x" aria-label="Delete entry" data-a="dellog" data-i="'+r.i+'">&times;</button></div>';
      });
    }
    return h;
  }

  function usDays(){
    var out=[];[0,1,2,3,4,5,6].forEach(function(n){
      var k=ymd(addDays(new Date(),n)),ls=[];
      evsOn(k).forEach(function(ev){if(ev.by==='p'||ev.share==='hidden')return;
        ls.push(fmtRange(tmin(ev.time),ev.dur)+': '+(ev.share==='generic'?'Appointment':ev.title+(ev.place?', '+ev.place:''))+(ev.withJ?' (together)':''))});
      if(ls.length)out.push([n===0?'Today':n===1?'Tomorrow':dayLabel(k),ls]);
    });return out;
  }
  function usText(){
    var d=usDays(),t=fxt('§N\u2019s plans')+'\n';
    if(!d.length)return t+'\nNothing shared for the next few days.';
    d.forEach(function(g){t+='\n'+g[0]+'\n';g[1].forEach(function(l){t+='\u2022 '+fxt(l)+'\n'})});
    return t.trim();
  }
  function shareLine(ev){return fmtRange(tmin(ev.time),ev.dur)+': '+(ev.share==='generic'?'Appointment':ev.title+(ev.place?', '+ev.place:''))+(ev.withJ?' (together)':'')}
  function flexTasks(){return S.tasks.filter(function(t){return !t.done&&!t.ex&&(t.h||'week')==='week'}).slice(0,20).map(function(t){return t.title})}
  function flexHtml(f){if(!f.length)return '';return '<div class="card"><details class="tuck"><summary>Flexible this week ('+f.length+')</summary><p class="small">Things without a set time that might happen any day.</p><ul>'+f.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul></details></div>'}
  function liveDays(){var out=[];for(var n=0;n<14;n++){var k=ymd(addDays(new Date(),n)),ls=[];evsOn(k).forEach(function(ev){if(ev.by==='p'||ev.share==='hidden'||ev.ex)return;ls.push(fxt(shareLine(ev)))});if(ls.length)out.push({k:k,l:ls})}return out}
  function liveId(){var id=load('gs-share-id','');if(!id){var a='abcdefghijkmnpqrstuvwxyz23456789';id='';for(var i=0;i<20;i++)id+=a[Math.floor(Math.random()*a.length)];save('gs-share-id',id)}return id}
  function liveUrl(){return location.href.split('#')[0]+'#live='+liveId()}
  function signedIn(){return !!(window.GSSync&&window.GSSync.state.user)}
  function publishLive(){
    if(!signedIn()||S.pv||!(PROF&&PROF.partner))return;
    var body={n:(PROF&&PROF.name)||'',d:liveDays()},js=JSON.stringify(body);
    if(js===publishLive.last)return;
    clearTimeout(publishLive.t);publishLive.t=setTimeout(function(){publishLive.last=js;try{window.GSSync.publishLive(liveId(),body)}catch(e){}},2000);
  }
  function dailyText(){
    var k=ymd(new Date()),ls=[];evsOn(k).forEach(function(ev){if(ev.by==='p'||ev.share==='hidden'||ev.ex)return;ls.push(fxt(shareLine(ev)))});
    var t=ls.length?fxt('§N\u2019s plans today:')+'\n'+ls.map(function(l){return '\u2022 '+l}).join('\n'):'Nothing on my schedule today.';
    if(signedIn())t+='\n\n'+fxt('See §N\u2019s live schedule here: ')+liveUrl();
    return t;
  }
  function smsHref(body){var ios=/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)&&('ontouchend' in document);return 'sms:'+(ios?'&':'?')+'body='+encodeURIComponent(body)}
  S.dtx=load('gs-dtx',{on:true,time:'09:00'});
  function dailyCard(){
    if(!(PROF&&PROF.partner)||!S.dtx.on||load('gs-dtx-day','')===ymd(new Date()))return '';
    var now=new Date(),cur=now.getHours()*60+now.getMinutes();if(cur<tmin(S.dtx.time||'09:00'))return '';
    return '<div class="card dtx"><div class="between"><h3>Send today&rsquo;s plans to §P</h3></div><p class="small">One tap opens Messages with your day written out'+(signedIn()?' and a link to your live schedule':'')+'.</p><div class="row"><a class="btn grow" href="'+esc(smsHref(dailyText()))+'" data-a="dtxsent">Send to §P</a><button class="btn alt grow" data-a="dtxskip">Not today</button></div></div>';
  }
  function usLink(){
    var o={n:(PROF&&PROF.name)||'',d:usDays().map(function(g){return [g[0],g[1].map(fxt)]})};
    var b=btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
    return location.href.split('#')[0]+'#share='+b;
  }
  function sendOut(text,url,msg){
    if(navigator.share){navigator.share(url?{title:'Plans',url:url}:{text:text}).catch(function(){});return}
    var v=url||text;
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(function(){toast(msg)},function(){toast('Could not copy on this browser.')});
    else toast('Could not copy on this browser.');
  }
  function pvParse(){
    var lv=/^#live=([a-z0-9]{8,40})$/.exec(location.hash||'');if(lv)return {live:lv[1],loading:true};
    var m=/^#share=([\w-]+)$/.exec(location.hash||'');if(!m)return null;
    try{var s=m[1].replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';var o=JSON.parse(decodeURIComponent(escape(atob(s))));return o&&Array.isArray(o.d)?o:null}catch(e){return null}
  }
  function pvHtml(o){
    if(o.live){
      if(o.loading)return '<div class="pv"><h1>Loading&hellip;</h1><p class="small">'+(o.slow?'Could not reach the schedule just now. Check your connection and refresh.':'Getting the latest schedule.')+'</p></div>';
      var D=o.data;if(!D)return '<div class="pv"><h1>Schedule not found</h1><p class="small">This link is not active. Ask for a new one.</p></div>';
      var tk=ymd(new Date()),tm=ymd(addDays(new Date(),1)),days=(D.d||[]).filter(function(x){return x.k>=tk});
      var h='<div class="pv"><h1>'+(D.n?esc(D.n)+'&rsquo;s schedule':'Schedule')+'</h1><p class="small">Live. This page updates by itself whenever plans change.'+(D.up?' Last change '+esc(new Date(D.up).toLocaleString(undefined,{weekday:'short',hour:'numeric',minute:'2-digit'}))+'.':'')+'</p>';
      if(!days.length)h+='<div class="card"><p class="small">Nothing shared for the next couple of weeks.</p></div>';
      days.forEach(function(g){h+='<div class="dayhead">'+(g.k===tk?'Today':g.k===tm?'Tomorrow':esc(dayLabel(g.k)))+'</div><div class="card">';g.l.forEach(function(l){h+='<div class="him"><b>'+esc(l)+'</b></div>'});h+='</div>'});
      return h+'</div>';
    }
    var h='<div class="pv"><h1>'+(o.n?esc(o.n)+'&rsquo;s plans':'Plans')+'</h1><p class="small">A snapshot of what was shared. It does not update by itself, so ask for a fresh link any time.</p>';
    if(!o.d.length)h+='<div class="card"><p class="small">Nothing shared for the next few days.</p></div>';
    o.d.forEach(function(g){h+='<div class="dayhead">'+esc(g[0])+'</div><div class="card">';g[1].forEach(function(l){h+='<div class="him"><b>'+esc(l)+'</b></div>'});h+='</div>'});
    return h+'</div>';
  }
  function usRow(ev){
    var rng=fmtRange(tmin(ev.time),ev.dur),who=ev.withJ?'§N and §P':'§N';
    var line=ev.share==='generic'?who+', Appointment, '+rng:who+', '+ev.title+', '+rng+(ev.place?', '+ev.place:'');
    return '<div class="him"><b>'+esc(line)+'</b>'+(ev.ex?'<span class="small">Example</span>':'')+'</div>';
  }
  function us(){
    if(!(PROF&&PROF.partner)){
      var e=head({title:'Us',sub:'Share your day with the people you plan around'})+lotRow();
      e+='<div class="card"><h3>What Us is for</h3><p class="small">Add a partner and this becomes your shared view of each other&rsquo;s day.</p><ul class="usx"><li><b>See their agenda at a glance.</b> Today, tomorrow and the rest of the week, without asking.</li><li><b>Plan joint activities.</b> Dinner out or a movie night shows up once for both of you.</li><li><b>Choose what they see.</b> Each plan can show full details, just &ldquo;Appointment&rdquo;, or stay private.</li><li><b>Plan around their schedule.</b> Add their late shift or lunch break so your Plans tab knows.</li><li><b>Send a quick summary.</b> A bulleted list or a read-only link of your week, in one tap.</li></ul><button class="btn" data-a="usadd">Add a partner</button></div>';
      return e;
    }
    var h=head({title:'Us',sub:'What §P sees of your day'})+lotRow();
    h+=hint('us','note','Built from the plans you add on Home. Each plan shows the way you set it: full details, just "Appointment", or nothing. Free time shows nothing.');
    var groups=[['Today',[0]],['Tomorrow',[1]],['Later this week',[2,3,4,5,6,7]]],hidden=0,any=false;
    groups.forEach(function(g){
      var rows='';
      g[1].forEach(function(n){
        var k=ymd(addDays(new Date(),n));
        evsOn(k).forEach(function(ev){
          if(ev.by==='p')return;
          if(ev.share==='hidden'){hidden++;return}
          var pre=(g[0]==='Later this week')?'<span class="small">'+esc(dayLabel(k))+'</span>':'';
          rows+=pre+usRow(ev);
        });
      });
      if(rows){any=true;h+='<div class="dayhead">'+g[0]+'</div><div class="card">'+rows+'</div>'}
    });
    if(!any)h+='<div class="card"><p class="small">Nothing shared for the next few days.</p></div>';
    if(hidden)h+='<p class="small">'+hidden+' private plan'+(hidden===1?'':'s')+' not shown to §P.</p>';
    h+='<p class="small">Shared plans, like dinner out, appear once for both of you.</p>';
    h+='<div class="card"><h3>Send this to §P</h3><p class="small">A plain bulleted list of the next week, using what you chose to share.</p><div class="chips sm"><button data-a="ustext">'+(navigator.share?'Share as text':'Copy as text')+'</button></div></div>';
    h+='<div class="card"><h3>Live schedule link</h3>'+(signedIn()?'<p class="small">A private link to a page that always shows your shared plans for the next two weeks, updating by itself. No sign-in needed to view it.</p><div class="chips sm"><button data-a="uslive">'+(navigator.share?'Share live link':'Copy live link')+'</button></div>':'<p class="small">Sign in from Settings to get a private link that always shows your latest shared plans.</p>')+'</div>';
    if(PROF&&PROF.partner){
      h+='<div class="card"><div class="between"><h3>§P&rsquo;s schedule</h3><button class="addbtn" data-a="evnewp">+ Add</button></div><p class="small">Things on §P&rsquo;s day you want to plan around, like a lunch break or a late shift. Only you see these, and they show up on your Plans tab.</p>';
      var pr='';
      for(var n=0;n<8;n++){var kk=ymd(addDays(new Date(),n));evsOn(kk).forEach(function(ev){if(ev.by==='p')pr+='<button class="ev" data-a="evedit" data-lp="evedit" data-v="'+esc(ev.id)+'"><span class="tm">'+fmt(tmin(ev.time))+'<small>'+esc(dayLabel(kk))+'</small></span><span class="bd"><b>'+esc(ev.title)+'</b>'+(ev.place?'<span class="small">'+esc(ev.place)+'</span>':'')+'</span></button>'})}
      h+=pr?'<div class="evlist">'+pr+'</div>':'<p class="small">Nothing added yet.</p>';
      h+='</div>';
    }
    return h;
  }

  function roughSheet(){
    if(!S.rp)return '';
    var n=S.trk.length,tt=n===1?'Rough day. '+esc(S.trk[0].name)+'?':n?'Rough day. Any of these?':'Rough day.';
    var h='<div class="backdrop" data-a="rbg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Rough day"><h2 style="font-size:22px">'+tt+'</h2><p class="small">'+(n?'Totally optional. ':'')+'The rough day gets logged either way, then we switch to '+(creature()?'bear minimum':'low battery mode')+' for the rest of today.'+(n?' You can add symptoms and triggers later in the Log tab.':'')+'</p>';
    if(n){h+='<div class="chips">';S.trk.forEach(function(t){var on=S.rp.t===t.id;h+='<button class="gchip" data-a="rmig" data-v="'+esc(t.id)+'" aria-pressed="'+on+'" aria-expanded="'+on+'">'+STACK+'<span>'+esc(t.name)+'</span>'+CHEV+'</button>'});h+='</div>'}
    else h+='<details class="tuck"><summary>Does this happen to you a lot?</summary><p class="small">Give it a name, like migraine, flare or pain day, and the app will keep track of it for you. Next time, one tap logs it.</p><input class="field" type="text" id="rp-name" maxlength="30" placeholder="What do you call it?" aria-label="Name for what you want to track"></details>';
    if(S.rp.t)h+='<div class="gpanel">'+sevUI(S.rp.sev,'rsev',S.rp.t)+pickUI('meds','rp',S.rp.meds,S.rp.t)+'</div>';
    h+='<button class="btn" data-a="rgo">'+(creature()?'Switch to bear minimum':'Switch to low battery mode')+'</button><button class="quiet" data-a="rcancel">Never mind</button></div></div>';
    return h;
  }

  var INCL=[['partner','My partner'],['pets','My pet(s)'],['kids','My kids'],['others','Someone else'],['health','A health thing I track']];
  function anyIncl(){var I=S.incl||{};return !!(I.partner||I.pets||I.kids||I.others||I.health)}
  function inclOf(p){p=p||{};var o={};o.partner=!!p.partner;o.pets=!!((p.pets&&p.pets.length)||p.pet);o.kids=!!(p.kids&&p.kids.length);o.others=!!(p.others&&p.others.length);o.health=S.trk.length>0;if(p.incl)for(var k in p.incl)o[k]=o[k]||!!p.incl[k];return o}
  function listStr(a){return (a||[]).join(', ')}
  function nameFields(p,mode){
    p=p||{};if(!S.incl)S.incl=inclOf(p);var I=S.incl,h='';
    if(mode!=='p2'){h+='<label class="lab" for="pf-name">What should I call you?</label><input class="field" type="text" id="pf-name" maxlength="30" autocomplete="given-name" value="'+esc(p.name||'')+'">';
    h+='<div class="lab" style="margin-top:12px">I&rsquo;d like to include</div><div class="chips sm" role="group" aria-label="I would like to include">';
    INCL.forEach(function(o){h+='<button type="button" data-a="incl" data-v="'+o[0]+'" aria-pressed="'+!!I[o[0]]+'">'+o[1]+'</button>'});
    h+='</div>';}
    if(mode==='p1')return h;
    if(I.partner)h+='<label class="lab" for="pf-partner" style="margin-top:10px">Partner name(s)</label><input class="field" type="text" id="pf-partner" maxlength="80" placeholder="e.g. Jason" value="'+esc(listStr(p.partners||(p.partner?[p.partner]:[])))+'"><p class="small">Plans you add with them become joint activities that show up for both of you, and the Us tab lets you see each other&rsquo;s agenda at a glance. Separate names with commas.</p>';
    if(I.pets)h+='<label class="lab" for="pf-pets" style="margin-top:10px">Pet names</label><input class="field" type="text" id="pf-pets" maxlength="80" placeholder="e.g. Muffin, Bean" value="'+esc(listStr(p.pets||(p.pet?[p.pet]:[])))+'"><p class="small">Separate names with commas. Feeding steps show up in your routine, and you can rename or hide them in Settings.</p>';
    if(I.kids)h+='<label class="lab" for="pf-kids" style="margin-top:10px">Kids&rsquo; names</label><input class="field" type="text" id="pf-kids" maxlength="80" placeholder="e.g. Lily, Sam" value="'+esc(listStr(p.kids))+'"><p class="small">Separate names with commas. An example step, getting them ready for the day, shows up in your morning. Rename it, hide it, or add your own in Settings.</p>';
    if(I.others)h+='<label class="lab" for="pf-others" style="margin-top:10px">Who else?</label><input class="field" type="text" id="pf-others" maxlength="80" placeholder="e.g. Mom, Alex" value="'+esc(listStr(p.others))+'"><p class="small">Separate names with commas. An example step, checking in with them, shows up in your evening. Rename it, hide it, or add your own in Settings.</p>';
    if(I.health)h+='<label class="lab" for="pf-health" style="margin-top:10px">What would you like to track?</label><input class="field" type="text" id="pf-health" maxlength="90" placeholder="e.g. Migraine, Flare, Pain day" value="'+esc(trkNames().join(', '))+'"><p class="small">Your own word for it. On a rough day, one tap in the Log is a whole entry, and details like symptoms are always optional. Up to three, separated by commas.</p>';
    return h;
  }
  function welcomeSheet(){
    if(PROF)return '';
    var G=window.GSSync,st=G&&G.state;
    if(!S.welInfo&&!(st&&st.user)){
      var h='<div class="backdrop" style="z-index:40"><div class="sheet welcome" role="dialog" aria-modal="true" aria-label="Welcome"><h2 style="font-size:26px">Welcome</h2><p class="small">Sign in to keep your plans, tasks and settings in step across your phone and computer. You can also skip this and keep everything on this device.</p>';
      if(!G||!st.ready)h+='<p class="small">'+((window.performance&&performance.now()>8000)||!navigator.onLine?'The sign-in service is not reachable right now. You can skip for now and sign in later from the menu.':'Connecting\u2026')+'</p>';
      else{
        h+='<button class="btn acg" data-a="acgoogle"><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg><span>Sign in with Google</span></button>';
        h+='<p class="small" style="margin-top:6px">Or get a sign-in link by email:</p><form class="add" data-a="acemail"><input type="email" id="acmail" placeholder="you@example.com" aria-label="Email for a sign-in link" autocomplete="email"><button type="submit">Send link</button></form>';
        if(st.sent)h+='<p class="small acstat">Link sent to '+esc(st.sent)+'. Open it on this device to finish signing in.</p>';
        if(st.error)h+='<p class="small acstat" role="alert">'+esc(st.error)+'</p>';
      }
      return h+'<button class="quiet" data-a="welskip">Skip for now</button></div></div>';
    }
    return '<div class="backdrop" style="z-index:40"><div class="sheet" role="dialog" aria-modal="true" aria-label="Welcome"><h2 style="font-size:26px">Welcome</h2>'+(S.welP2?'<p class="small">A name or two for each, so the app can talk about them the way you do.</p><form id="welcomeform" style="display:flex;flex-direction:column;gap:4px"><input type="hidden" id="pf-name" value="'+esc(S.welName||'')+'">'+nameFields({},'p2')+'<button class="btn" type="submit" style="margin-top:14px">Start</button></form><button class="quiet" data-a="welback">&larr; Back</button>':'<p class="small">A few names make this feel like yours. All of it is optional, and you can change it any time in the menu.</p><form id="welcomeform" style="display:flex;flex-direction:column;gap:4px">'+nameFields({name:S.welName||''},'p1')+'<button class="btn" type="'+(anyIncl()?'button" data-a="welnext':'submit')+'" style="margin-top:14px">'+(anyIncl()?'Next':'Start')+'</button></form><button class="quiet" data-a="wskip">Skip for now</button>')+'</div></div>';
  }
  /* ---- after the welcome: set things up now, or look around with the examples ---- */
  S.startQ=load('gs-startq',false);
  /* demo: the example-filled app, with a way to wipe it and start setup fresh */
  /* the tour: a practice copy of the app filled with examples. Starting it tucks the person's own data
     away in gs-tour-snap (never synced); finishing puts it all back exactly as it was. */
  var TKEEP={'gs-tabs':1,'gs-profile':1,'gs-look':1,'gs-cw':1,'gs-trk':1,'gs-appear':1,'gs-logic':1};
  function lsKeys(){var o=[];for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k&&k.indexOf('gs-')===0)o.push(k)}return o}
  function tourStart(isNew){
    if(localStorage.getItem('gs-tour-snap'))return;
    var snap={};lsKeys().forEach(function(k){if(k.indexOf('gs-sync-')===0||k.indexOf('gs-tour')===0)return;snap[k]=localStorage.getItem(k)});
    try{localStorage.setItem('gs-tour-snap',JSON.stringify(snap))}catch(e){toast('Not enough room on this device for the tour.');return}
    lsKeys().forEach(function(k){if(TKEEP[k]||k.indexOf('gs-sync-')===0||k.indexOf('gs-tour')===0)return;localStorage.removeItem(k)});
    localStorage.setItem('gs-tour','0');if(isNew)localStorage.setItem('gs-tour-new','1');
    location.hash='';location.reload();
  }
  function tourEnd(){
    var raw=localStorage.getItem('gs-tour-snap');if(!raw)return;var snap={};try{snap=JSON.parse(raw)||{}}catch(e){}
    var isNew=localStorage.getItem('gs-tour-new');
    lsKeys().forEach(function(k){if(k.indexOf('gs-sync-')===0)return;localStorage.removeItem(k)});
    Object.keys(snap).forEach(function(k){try{localStorage.setItem(k,snap[k])}catch(e){}});
    if(isNew)localStorage.setItem('gs-gosetup','1');
    location.reload();
  }
  S.tour=localStorage.getItem('gs-tour-snap')?(+localStorage.getItem('gs-tour')||0):null;
  try{localStorage.removeItem('gs-demo')}catch(e){}
  S.demo=S.tour!==null;
  function demoBar(){return ''}
  function tourSteps(){
    var u=U(),lot=U().lot.toLowerCase(),pk=U().parkIt;
    return [
      {tab:'today',t:'Welcome to the tour',b:'This is a practice copy of the app, filled with examples. Tap anything you like. Nothing here is saved, and when you finish, your own app comes back exactly as it was.'},
      {tab:'today',sel:'section.hero',t:'One step at a time',b:'Home shows just your next step, so there is nothing to sort through. Finish it, or skip it, and the next one takes its place.'},
      {tab:'today',sel:'ul.steps',t:'Your routine, in order',b:'Tap a step to check it off or jump back to it. Hold one to rename it or anchor it, so it always counts.'},
      {tab:'today',sel:'[data-a=rough]',t:'For rough days',b:'This is for when you\u2019re running later than usual, or maybe you\u2019re having a hard time. Whatever the case, tap it and the app switches to '+(creature()?'bear minimum':'low battery mode')+': just your anchored basics, and nothing else asks for attention.',alt:'In the morning, a \u201cRough morning?\u201d button sits under your next step. It\u2019s for when you\u2019re running later than usual, or maybe you\u2019re having a hard time. Whatever the case, tap it and the app switches to '+(creature()?'bear minimum':'low battery mode')+': just your anchored basics, and nothing else asks for attention.'},
      {tab:'today',sel:function(){var x=document.querySelector('.parkh');return x&&x.closest('.card')},t:'The '+lot,b:'Things with no set time live in the '+lot+'. Home suggests one when it fits the time you have, and anything with a real date comes up sooner as that date gets close.',alt:'Things with no set time live in the '+lot+'. When there is room in your day, Home suggests one, and anything with a real date comes up sooner as that date gets close.'},
      {tab:'ov',sel:'.ovmain',t:'Plans',b:'Your week or month at a glance, with the '+lot+' alongside. Tap + Add on any day to plan something there.'},
      {tab:'lists',sel:'details.lcard',t:'Lists',b:'Groceries, gift ideas, movies to watch. Nothing here is due. Tap '+pk+' on an item to send it to the '+lot+'. Swipe left to delete, or hold to edit.'},
      {tab:'lot',sel:'.lotpage',t:'The '+lot+', up close',b:'Everything with no set time, sorted into this week, this month, and groups you make. Hold '+pk+' when adding something to fill in details first.'},
      {tab:'us',t:'Us',b:'If you plan around a partner, Us shows each of you what the other has going on, without merging your calendars. You choose how much each plan shares.'},
      {tab:'log',sel:'.chipflow',t:'The Log',b:'A quick, optional way to note things like a rough morning or a migraine. One tap is a whole entry, and you can look back by month.'},
      {tab:'today',sel:'.fab',t:'When you are stuck',b:'Tap here any time you cannot get started, or have a question about the app.'},
      {tab:'today',sel:'[data-a=menu]',t:'The menu',b:'Themes, mindsets, your routine and your settings all live here.'},
      {tab:'today',t:'That is the tour',b:localStorage.getItem('gs-tour-new')?'Next, a few quick questions to set the app up for you. The examples will be cleared.':'Your own app comes back exactly as you left it.'}
    ].filter(function(s){return s.tab==='today'||tabsOn().indexOf(s.tab)>=0});
  }
  function tourCard(){
    if(S.tour===null)return '';var st=tourSteps(),i=Math.min(S.tour,st.length-1),s=st[i],last=i===st.length-1;
    return '<div class="tourcard" role="dialog" aria-label="Tour" aria-live="polite"><div class="between"><span class="small">'+(i+1)+' of '+st.length+'</span>'+(last?'':'<button class="quiet" data-a="tourend">End tour</button>')+'</div><h3>'+esc(s.t)+'</h3><p class="small">'+esc(s.b)+'</p><div class="row">'+(i?'<button class="btn alt grow" data-a="tourback">Back</button>':'')+'<button class="btn grow" data-a="'+(last?'tourend':'tournext')+'">'+(last?(localStorage.getItem('gs-tour-new')?'Set up my app':'Finish'):'Next')+'</button></div></div>';
  }
  function tourApply(scroll,newTab){
    document.querySelectorAll('.tourhi').forEach(function(x){x.classList.remove('tourhi')});
    if(S.tour===null)return;var st=tourSteps(),s=st[Math.min(S.tour,st.length-1)],el=null;
    if(s.sel)el=typeof s.sel==='function'?s.sel():document.querySelector(s.sel);
    var card=document.querySelector('.tourcard');
    if(el){el.classList.add('tourhi');if(scroll){var r=el.getBoundingClientRect();if(r.top<70||r.bottom>innerHeight-260)window.scrollTo({top:Math.max(0,scrollY+r.top-90),behavior:'smooth'})}}
    else{if(s.sel&&s.alt&&card){var cp=card.querySelector('p');if(cp)cp.textContent=s.alt}if(scroll&&newTab)window.scrollTo({top:0,behavior:'smooth'})}
    if(card){setTimeout(function(){var r=el&&el.getBoundingClientRect();card.classList.toggle('tctop',!!(r&&r.top>innerHeight*0.5))},scroll?400:0)}
  }
  function tourGo(n){var st=tourSteps();S.tour=Math.max(0,Math.min(st.length-1,n));localStorage.setItem('gs-tour',String(S.tour));S.menu=false;var nt=S.tab!==st[S.tour].tab;S.tab=st[S.tour].tab;render();tourApply(true,nt)}
  function resetForSetup(){
    S.tasks=[];saveTasks();S.events=[];save('gs-events',S.events);S.log=[];save('gs-log',S.log);S.lists=[];save('gs-lists',S.lists);
    S.reps=[];S.cust=[];S.rtn={parts:{morning:PARTS.morning.steps.slice(),afternoon:PARTS.afternoon.steps.slice(),evening:PARTS.evening.steps.slice()},hidden:['dailymeds'],names:{}};saveRtn();
    S.floorIds=FLOORDEF.slice();save('gs-floor',S.floorIds);S.cats=['Rough day'];save('gs-cats',S.cats);
    S.stacks=[];syncTrkStacks();save('gs-stacks',S.stacks);
    S.hints={};save('gs-hints',S.hints);S.dayOff=0;save('gs-dayoff',0);S.status={};S.doing=null;
    S.startDay=ymd(new Date());save('gs-startday',S.startDay);
  }
  function afterWelcome(){save('gs-rtn',S.rtn);S.startQ=true;save('gs-startq',true);S.startDay=ymd(new Date());save('gs-startday',S.startDay)}
  function startSheet(){
    if(!S.startQ||!PROF)return '';
    return '<div class="backdrop" style="z-index:40"><div class="sheet" role="dialog" aria-modal="true" aria-label="How would you like to start?"><h2 style="font-size:24px">How would you like to start?</h2>'
      +'<button class="opt" data-a="startcust"><span><b>Customize my routine</b><span class="small">Clears the examples and opens your settings, so you can set things up your way.</span></span></button>'
      +'<button class="opt" data-a="startlook"><span><b>Show me around first</b><span class="small">A short tour on a practice copy filled with examples. When it ends, the examples are cleared and you set up your own.</span></span></button>'
      +'</div></div>';
  }

  /* ---- setup questions for "Customize my routine" ---- */
  S.dayOff=load('gs-dayoff',0);
  var SU_DAILY=[
    ['getup','Get out of bed','morning'],['dailymeds','Take medications','morning'],['teeth','Brush teeth','morning'],['clothes','Get dressed','morning'],
    ['c:Shower','Shower','morning'],['muffin','Feed §C','morning','pet'],['kidsam','Get §K ready','morning','kids'],['water','Drink water','morning'],
    ['meals','Meals','morning'],['jobs','Work or project time','afternoon'],['pt','Stretch or exercise','afternoon'],
    ['tidy','A quick tidy','evening'],['checkin','Check in with §O','evening','others'],['tomorrow','Glance at tomorrow','evening']
  ];
  var SU_START=[['early','Early, before 8',-90],['mid','Mid-morning, 8 to 10',0],['late','Late, after 10',150],['varies','It varies',0]];
  var SU_HELP=[['music','Music'],['people','Someone being around'],['drink','A warm drink'],['outside','Getting outside']];
  var SU_MUS=[['sp','Spotify'],['am','Apple Music'],['yt','YouTube']];
  function suHas(k){return k==='pet'?!!(PROF&&PROF.pet):k==='kids'?!!(PROF&&PROF.kids&&PROF.kids.length):k==='others'?!!(PROF&&PROF.others&&PROF.others.length):true}
  function suDaily(){return SU_DAILY.filter(function(d){return !d[3]||suHas(d[3])})}
  function suNew(){return {i:0,sel:[],own:'',floor:null,tasks:['','',''],start:null,helps:[],mus:[]}}
  function suRead(){var U2=S.setup;if(!U2)return;var o=document.getElementById('su-own');if(o)U2.own=o.value;[0,1,2].forEach(function(i){var t=document.getElementById('su-t'+i);if(t)U2.tasks[i]=t.value})}
  function suOwn(){return splitNames(S.setup.own).slice(0,6)}
  function suPicked(){var a=suDaily().filter(function(d){return S.setup.sel.indexOf(d[0])>=0}).map(function(d){return {id:d[0],t:fxt(d[1])}});suOwn().forEach(function(t){a.push({id:'own:'+t,t:t})});return a}
  function suChip(act,v,label,on){return '<button type="button" data-a="'+act+'" data-v="'+esc(v)+'" aria-pressed="'+!!on+'">'+esc(label)+'</button>'}
  function setupSheet(){
    var U2=S.setup;if(!U2)return '';
    var n=5,h='<div class="backdrop" style="z-index:40"><div class="sheet" role="dialog" aria-modal="true" aria-label="Set up your day"><div class="kicker">'+(U2.i+1)+' of '+n+'</div>';
    if(U2.i===0){
      h+='<h2 style="font-size:23px">Which of these do you want help remembering every day?</h2><p class="small">Pick as many as you like. These become your routine, and you can change them any time.</p><div class="chips">';
      suDaily().forEach(function(d){h+=suChip('su-sel',d[0],fxt(d[1]),U2.sel.indexOf(d[0])>=0)});
      h+='</div><label class="lab" for="su-own" style="margin-top:12px">Anything else? Separate with commas.</label><input class="field" type="text" id="su-own" maxlength="200" placeholder="e.g. Water the plants, Walk the dog" value="'+esc(U2.own)+'">';
    }else if(U2.i===1){
      var pk=suPicked();
      if(U2.floor===null)U2.floor=[];
      h+='<h2 style="font-size:23px">Which of those still matter on your worst days?</h2><p class="small">On a rough day, the app shows only these and lets everything else wait. They also never get a skip button.</p>';
      if(pk.length){h+='<div class="chips">';pk.forEach(function(x){h+=suChip('su-floor',x.id,x.t,U2.floor.indexOf(x.id)>=0)});h+='</div>'}
      else h+='<p class="small">You did not pick anything on the last screen, so there is nothing to choose here yet.</p>';
    }else if(U2.i===2){
      h+='<h2 style="font-size:23px">Is anything hanging over you right now?</h2><p class="small">Up to three things you keep meaning to do but have not found a time for. They go in your parking lot, and the app will suggest small ways to start.</p>';
      [0,1,2].forEach(function(i){h+='<input class="field" type="text" id="su-t'+i+'" maxlength="80" style="margin-top:6px" placeholder="'+['e.g. Call the insurance company','e.g. Return the package','Another one'][i]+'" aria-label="Thing hanging over you '+(i+1)+'" value="'+esc(U2.tasks[i])+'">'});
    }else if(U2.i===3){
      h+='<h2 style="font-size:23px">When does your day usually start?</h2><p class="small">So your morning lasts as long as your mornings actually do.</p><div class="chips">';
      SU_START.forEach(function(o){h+=suChip('su-start',o[0],o[1],U2.start===o[0])});h+='</div>';
    }else{
      h+='<h2 style="font-size:23px">What helps you get going?</h2><p class="small">Pick any that are true. The app will put them where they help.</p><div class="chips">';
      SU_HELP.forEach(function(o){h+=suChip('su-help',o[0],o[1],U2.helps.indexOf(o[0])>=0)});h+='</div>';
      if(U2.helps.indexOf('music')>=0){h+='<p class="small" style="margin-top:10px">Which music app?</p><div class="chips sm">';SU_MUS.forEach(function(o){h+=suChip('su-mus',o[0],o[1],U2.mus.indexOf(o[0])>=0)});h+='</div>'}
    }
    h+='<div class="row" style="margin-top:16px">'+(U2.i?'<button class="btn alt grow" data-a="su-back">Back</button>':'')+'<button class="btn grow" data-a="su-next">'+(U2.i===n-1?'Finish':'Next')+'</button></div>';
    h+='<button class="quiet" data-a="su-skip">'+(U2.i===n-1?'Skip and finish':'Skip this one')+'</button></div></div>';
    return h;
  }
  function suCust(t,part,after){
    var rid='c'+Date.now()+Math.floor(Math.random()*1000);S.cust.push({id:rid,t:t.slice(0,50)});
    var a=S.rtn.parts[part],i=after?a.indexOf(after):-1;if(i>=0)a.splice(i+1,0,rid);else a.push(rid);return rid;
  }
  function suFinish(){
    var U2=S.setup,keep={},ownIds={};
    /* routine: picked steps in their usual order, the rest hidden so they can be put back */
    var all=['morning','afternoon','evening'];
    var hid=(S.rtn.hidden||[]).slice();all.forEach(function(p){S.rtn.parts[p].forEach(function(id){if(hid.indexOf(id)<0&&!S.cust.some(function(x){return x.id===id}))hid.push(id)});S.rtn.parts[p]=[]});
    suDaily().forEach(function(d){
      if(U2.sel.indexOf(d[0])<0)return;
      if(d[0].indexOf('c:')===0){ownIds[d[0]]=suCust(d[0].slice(2),d[2]);return}
      if(d[0]==='meals'){[['meal','morning'],['lunch','afternoon'],['dinner','evening']].forEach(function(m){S.rtn.parts[m[1]].push(m[0]);hid=hid.filter(function(x){return x!==m[0]})});return}
      S.rtn.parts[d[2]].push(d[0]);hid=hid.filter(function(x){return x!==d[0]});
      if(d[0]==='muffin'){S.rtn.parts.evening.unshift('muffinpm');hid=hid.filter(function(x){return x!=='muffinpm'})}
    });
    suOwn().forEach(function(t){ownIds['own:'+t]=suCust(t,'morning')});
    S.rtn.hidden=hid;
    /* worst-day anchors */
    if(U2.floor!==null){S.floorIds=[];U2.floor.forEach(function(id){if(id==='meals')S.floorIds.push('meal','lunch','dinner');else S.floorIds.push(ownIds[id]||id)});if(S.floorIds.indexOf('muffin')>=0)S.floorIds.push('muffinpm');save('gs-floor',S.floorIds)}
    /* what helps */
    var first=S.rtn.parts.morning.indexOf('getup')>=0?'getup':null;
    if(U2.helps.indexOf('drink')>=0)suCust('Make a warm drink','morning',first);
    if(U2.helps.indexOf('outside')>=0)suCust('Step outside for a minute','morning');
    if(U2.helps.indexOf('people')>=0)suCust(PROF&&PROF.partner?'Say good morning to '+PROF.partner:'Text someone good morning','morning',first);
    if(U2.helps.indexOf('music')>=0){var m={sp:false,yt:false,am:false};(U2.mus.length?U2.mus:['sp']).forEach(function(k){m[k]=true});S.mus=m;save('gs-mus',S.mus)}
    syncSteps();saveRtn();
    /* parking lot */
    U2.tasks.map(function(t){return String(t||'').trim()}).filter(Boolean).forEach(function(t,i){
      S.tasks.push({id:'t'+Date.now()+i,title:t.slice(0,80),ex:false,h:'week',nr:false,fun:false,work:[],mins:15,w:'med',due:'',offDue:null,steps:[],done:false,created:Date.now()});
    });saveTasks();
    /* day start */
    var st=SU_START.filter(function(o){return o[0]===U2.start})[0];S.dayOff=st?st[2]:0;save('gs-dayoff',S.dayOff);
    S.setup=null;S.status={};S.tab='today';
  }
  function clearExamples(){
    S.tasks=S.tasks.filter(function(t){return !t.ex});saveTasks();
    S.events=S.events.filter(function(e){return !e.ex});save('gs-events',S.events);
    S.log=S.log.filter(function(e){return !e.smp});save('gs-log',S.log);
    S.lists=[];save('gs-lists',S.lists);
    S.cats=['Rough day'];save('gs-cats',S.cats);
    var hid=S.rtn.hidden||[];
    ['morning','afternoon','evening'].forEach(function(p){S.rtn.parts[p].forEach(function(id){if(hid.indexOf(id)<0&&!S.cust.some(function(x){return x.id===id}))hid.push(id)});S.rtn.parts[p]=[]});
    S.rtn.hidden=hid;saveRtn();S.status={};
  }
  function splitNames(s){return String(s||'').split(',').map(function(x){return x.trim()}).filter(Boolean).slice(0,8)}
  function joinNames(a){return a.length<2?(a[0]||''):a.slice(0,-1).join(', ')+' and '+a[a.length-1]}
  function saveProf(o){var I=S.incl||{},pets=I.pets?splitNames(o.pets):[];var partners=I.partner?splitNames(o.partner):[];PROF={name:(o.name||'').trim(),partners:partners,partner:joinNames(partners),pets:pets,pet:joinNames(pets),kids:I.kids?splitNames(o.kids):[],others:I.others?splitNames(o.others):[],incl:{partner:!!I.partner,pets:!!I.pets,kids:!!I.kids,others:!!I.others,health:!!I.health}};try{localStorage.setItem('gs-profile',JSON.stringify(PROF))}catch(e){}try{window.GSSync&&window.GSSync.touch('gs-profile')}catch(e){}}

  /* ---- Routine tab: daily steps and repeating tasks ---- */
  var DAYN=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  function defPart(id){var ps=['morning','afternoon','evening'];for(var i=0;i<3;i++)if(PARTS[ps[i]].steps.indexOf(id)>=0)return ps[i];return 'morning'}
  function ord(n){var s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0])}
  function repLabel(r){
    var w=r.rep==='w'?(r.days.length===7?'Every day':'Every '+r.days.slice().sort().map(function(d){return DAYN[d]}).join(', ')):r.mode==='4w'?'Every 4 weeks':r.mode==='nth'?nthLabel(r)+' of the month':'Monthly on the '+ord(r.dom||1);
    return w+', '+(r.as==='ev'?(r.time?fmt(tmin(r.time)):'')+', event':r.part+', '+(r.as==='lot'?'parking lot':'routine step'));
  }
  function routineTab(){
    var PS=[['morning','Morning'],['afternoon','Afternoon'],['evening','Evening']];
    {
      var v='<p class="small">The steps that make up your day. Nothing here ever turns into overdue.</p>';
      PS.forEach(function(p){
        var ids=S.rtn.parts[p[0]].filter(function(id){return !offId(id)});
        v+='<div class="grp"><div class="lab">'+p[1]+'</div>';
        if(ids.length){v+='<ul class="rtv">';ids.forEach(function(id){v+='<li data-lp="rtedit" data-v="'+esc(id)+'"><span>'+esc(nmOf(id))+'</span><button class="fpill'+(isFloor(id)?' on':'')+'" data-a="flrtog" data-v="'+esc(id)+'" aria-pressed="'+isFloor(id)+'">'+(creature()?(isFloor(id)?'<em class="pun">Bear</em> minimum \u2713':'<em class="pun">Bear</em> minimum'):(isFloor(id)?'Anchored':'Anchor it'))+'</button></li>'});v+='</ul>'}
        else v+='<p class="small">Nothing here yet.</p>';
        v+='</div>';
      });
      v+=anchorGrp()+'<button class="btn alt" data-a="rtedmode" style="margin:4px 0 8px">Edit routine</button>';
      return v+repeatingGrp();
    }
  }

  function rmStep(id){
    ['morning','afternoon','evening'].forEach(function(p){S.rtn.parts[p]=S.rtn.parts[p].filter(function(x){return x!==id})});
    if(S.cust.some(function(x){return x.id===id})){S.cust=S.cust.filter(function(x){return x.id!==id});S.floorIds=S.floorIds.filter(function(x){return x!==id});save('gs-floor',S.floorIds);delete S.rtn.names[id]}
    else if(S.rtn.hidden.indexOf(id)<0)S.rtn.hidden.push(id);
    saveRtn();
  }
  function rtSheet(){
    if(!S.rtEdit||!S.menu)return '';
    var PS=[['morning','Morning'],['afternoon','Afternoon'],['evening','Evening']];
    var h='<p class="small">Drag a step by its handle <span class="gripmini" aria-hidden="true"></span> to reorder it, or drag it into another part of the day. Swipe a step left, then tap Remove or swipe it again. Tap a name to rename it.</p><div class="rtlanes">';
    PS.forEach(function(p){
      var ids=S.rtn.parts[p[0]].filter(function(id){return !offId(id)});
      var adding=S.rtAdd===p[0];
      h+='<div class="grp rtlane"><div class="between rthead"><div class="lab">'+p[1]+'</div><button class="addbtn" data-a="rtaddopen" data-v="'+p[0]+'" aria-expanded="'+adding+'">'+(adding?'Close':'+ Add')+'</button></div><ul class="rtl" data-p="'+p[0]+'" aria-label="'+p[1]+'">';
      ids.forEach(function(id,i){
        h+='<li data-id="'+esc(id)+'" data-p="'+p[0]+'"><button class="swdel" data-a="rtswdel" data-v="'+esc(id)+'" tabindex="-1">Remove</button><div class="rtbox"><button class="rtn" data-a="rtedit" data-v="'+esc(id)+'"><span>'+esc(nmOf(id))+'</span></button><button class="fpill'+(isFloor(id)?' on':'')+'" data-a="flrtog" data-v="'+esc(id)+'" aria-pressed="'+isFloor(id)+'">'+(creature()?(isFloor(id)?'<em class="pun">Bear</em> minimum \u2713':'<em class="pun">Bear</em> minimum'):(isFloor(id)?'Anchored':'Anchor it'))+'</button></div><span class="grip" role="button" tabindex="0" aria-label="Drag to reorder '+esc(nmOf(id))+'. Arrow keys also move it." data-p="'+p[0]+'" data-v="'+esc(id)+'"><svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true"><rect x="3" y="4" width="12" height="2" rx="1"/><rect x="3" y="8" width="12" height="2" rx="1"/><rect x="3" y="12" width="12" height="2" rx="1"/></svg></span></li>';
      });
      h+='</ul>';
      if(adding)h+='<form class="add" data-a="rtadd" data-p="'+p[0]+'" style="margin-top:8px"><input type="text" id="rtadd-'+p[0]+'" placeholder="Add a step to '+p[1].toLowerCase()+'" aria-label="Add a step to '+p[1]+'" maxlength="50"><button type="submit">Add</button></form>';
      h+='</div>';
    });
    h+='</div>'+anchorGrp()+'<button class="btn" data-a="rtedmode" style="margin:4px 0 8px">Done</button>';
    return '<div class="backdrop" data-a="rtbg"><div class="sheet rtsheet" role="dialog" aria-modal="true" aria-label="Edit routine"><div class="between"><h2 style="font-size:24px">Edit routine</h2><button class="x" data-a="rtedmode" aria-label="Done editing">&times;</button></div>'+h+'</div></div>';
  }
  function anchorGrp(){return '<div class="grp"><div class="lab">'+(creature()?'<em class="pun">Bear</em> minimum':'Anchor it')+'</div><p class="small">Pick the things that always count. They never get a skip button, and they are what shows '+(creature()?'on bear minimum days':'in low battery mode')+'.</p><p class="small">A gentle reminder: picking too many is a lot to ask of your low battery self, so keep it to the few that truly matter.</p></div>'}
  function repeatingGrp(){
    var h='<div class="grp"><div class="lab mid">Repeating tasks</div><p class="small">Things that aren\u2019t in your daily routine, but come up every week or month. If one slips by, it just resets for next time. It never piles up.</p>';
    var rplans=S.events.filter(function(ev){return ev.rpt&&ev.by!=='p'});
    if(rplans.length){h+='<div class="evlist">';rplans.forEach(function(ev){h+='<button class="ev nt" data-a="evedit" data-lp="evedit" data-v="'+esc(ev.id)+'"><span class="bd"><b>'+esc(ev.title)+'</b><span class="small">'+esc(repLabel({rep:ev.rpt.rep,days:ev.rpt.days,dom:ev.rpt.dom,mode:ev.rpt.mode,nth:ev.rpt.nth,dow:ev.rpt.dow,as:'ev',time:ev.time}))+'</span></span></button>'});h+='</div>'}
    if(S.reps.length){h+='<div class="evlist">';S.reps.forEach(function(r){h+='<button class="ev nt" data-a="reedit" data-v="'+esc(r.id)+'"><span class="bd"><b>'+esc(r.t)+'</b><span class="small">'+esc(repLabel(r))+'</span></span></button>'});h+='</div>'}
    else if(!rplans.length)h+='<p class="small">None yet.</p>';
    return h+'<button class="btn alt" data-a="renew" style="margin-top:8px">+ Add a repeating task</button></div>';
  }
  function newRe(){return {id:null,t:'',rep:'w',days:[],dom:1,part:'afternoon',as:'step',time:'',dur:60,err:''}}
  function syncRe(){var R=S.re;if(!R)return;var t=document.getElementById('re-t'),d=document.getElementById('re-dom');var tm=document.getElementById('re-time');if(tm)R.time=tm.value;if(t)R.t=t.value;if(d)R.dom=Math.max(1,Math.min(31,parseInt(d.value,10)||1))}
  function itSheet(){
    var E=S.itE;if(!E)return '';var L=S.lists[E.l],it=L&&L.items[E.i];if(!it){S.itE=null;return ''}
    return '<div class="backdrop mid" data-a="itbg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Edit item"><h2 style="font-size:22px;text-align:center">Edit item</h2><p class="small" style="text-align:center;margin:0">In '+esc(L.name)+'</p><input class="field" type="text" id="it-name" maxlength="120" value="'+esc(itTxt(it))+'" aria-label="Item"><button class="btn" data-a="itsave">Save</button>'
      +(it.done?'':'<button class="btn alt" data-a="itpark">'+(it.parked?'Take it out of '+esc(lotThe()):esc(U().parkIt))+'</button>')
      +'<button class="quiet" style="text-align:center" data-a="itdel">Delete this item</button><button class="quiet" style="text-align:center" data-a="itcancel">Cancel</button></div></div>';
  }
  function seSheet(){
    if(!S.se)return '';
    var id=S.se.id,cu=S.cust.some(function(x){return x.id===id});
    return '<div class="backdrop mid" data-a="sebg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Edit step"><h2 style="font-size:22px;text-align:center">Edit step</h2><input class="field" type="text" id="se-name" maxlength="50" value="'+esc(S.se.name)+'" aria-label="Step name"><button class="fpill'+(isFloor(id)?' on':'')+'" style="align-self:center" data-a="flrtog" data-v="'+esc(id)+'" aria-pressed="'+isFloor(id)+'">'+(creature()?(isFloor(id)?'<em class="pun">Bear</em> minimum \u2713':'<em class="pun">Bear</em> minimum'):(isFloor(id)?'Anchored':'Anchor it'))+'</button><button class="btn" data-a="sesave">Save name</button><button class="quiet" style="text-align:center" data-a="sedel">'+(cu?'Delete this step':'Remove from routine')+'</button><button class="quiet" style="text-align:center" data-a="secancel">Cancel</button></div></div>';
  }
  function reSheet(){
    var R=S.re;if(!R)return '';
    var h='<div class="backdrop mid" data-a="rebg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Repeating task"><h2 style="font-size:22px;text-align:center">'+(R.id?'Edit repeating task':'Repeating task')+'</h2>';
    if(R.err)h+='<div class="note" role="alert">'+esc(R.err)+'</div>';
    h+='<div class="grp"><div class="lab">What is it</div><input class="field" type="text" id="re-t" maxlength="50" value="'+esc(R.t)+'" placeholder="e.g. Water the plants" aria-label="What is it"></div>';
    h+=rptUI('re',R,true).replace(/<\/div>$/,'');
    h+='</div><div class="grp"><div class="lab">Shows up as</div>'+evChips('reas',R.as,[['step','A routine step'],['lot','A parking lot task'],['ev','An event']])+'<p class="small">'+(R.as==='step'?'It joins that part of the day on its day, like any other step.':R.as==='lot'?'It lands in your weekly parking lot on its day and stays until you do it.':'It shows on Home and on the Plans tab on its day, at the time you set.')+'</p></div>';
    if(R.as==='ev')h+='<div class="grp"><div class="lab">Start time</div><div class="tfield"><input class="field" type="time" id="re-time" required value="'+esc(R.time||'')+'" aria-label="Start time"></div><div class="lab" style="margin-top:10px">How long</div>'+evChips('redur',R.dur,[[30,'30 min'],[60,'1 hr'],[90,'1.5 hr'],[120,'2 hr'],[180,'3 hr']])+'</div>';
    else h+='<div class="grp"><div class="lab">Time of day</div>'+evChips('repart',R.part,[['morning','Morning'],['afternoon','Afternoon'],['evening','Evening']])+'</div>';
    return h+'<button class="btn" data-a="resave">Save</button>'+(R.id?'<button class="quiet" style="text-align:center" data-a="redel">Delete this repeating task</button>':'')+'<button class="quiet" style="text-align:center" data-a="recancel">Cancel</button></div></div>';
  }
  function accountUI(){
    var G=window.GSSync,st=G&&G.state,h='<div class="grp acct"><div class="lab">Account</div>';
    if(!G||!st.ready){var slow=(window.performance&&performance.now()>8000);h+='<p class="small">'+(!navigator.onLine?'You are offline. Everything still works on this device, and you can sign in when you are back online.':slow?'Could not reach the sign-in service just now. Everything still works on this device. Try again later.':'Connecting\u2026')+'</p></div>';return h}
    if(st.user){
      var when=st.last?Math.max(0,Math.round((Date.now()-st.last)/60000)):null;
      h+='<p class="small">Signed in as <b>'+esc(st.email||'your account')+'</b>. Your tasks, plans, lists, log and settings sync across every device you sign in on.</p>';
      h+='<p class="small acstat">'+(st.status==='paused'?'Sync is paused during the tour.':st.status==='syncing'?'Syncing\u2026':st.status==='pending'?'Saving your latest change\u2026':st.status==='error'?esc(st.error):when===null?'Up to date.':when<1?'Synced just now.':'Synced '+when+' min ago.')+'</p>';
      h+='<div class="chips sm"><button data-a="acsync">Sync now</button><button data-a="acout">Sign out</button></div>';
    }else{
      h+='<p class="small">Sign in to keep your phone and computer in step. Without an account everything stays on this device only, which also works fine.</p>';
      h+='<button class="btn acg" data-a="acgoogle"><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg><span>Sign in with Google</span></button>';
      h+='<p class="small" style="margin-top:8px">Or get a sign-in link by email:</p><form class="add" data-a="acemail"><input type="email" id="acmail" placeholder="you@example.com" aria-label="Email for a sign-in link" autocomplete="email"><button type="submit">Send link</button></form>';
      if(st.sent)h+='<p class="small acstat">Link sent to '+esc(st.sent)+'. Open it on this device to finish signing in.</p>';
    }
    if(st.error&&!st.user)h+='<p class="small acstat" role="alert">'+esc(st.error)+'</p>';
    return h+'</div>';
  }
  window.gsSyncChanged=function(){try{if(!PROF){PROF=load('gs-profile',null);render()}else if(S.menu&&S.mt==='settings')keepSheet(render)}catch(e){}};
  function menuSheet(){
    if(!S.menu)return '';
    var h='<div class="backdrop" data-a="mbg"><div class="sheet" role="dialog" aria-modal="true" aria-label="Menu"><div class="between"><h2 style="font-size:24px">Menu</h2><button class="x" data-a="mclose" aria-label="Close menu">&times;</button></div>';
    h+='<div class="subtabs" role="group" aria-label="Menu sections">';
    [['themes','Themes'],['logic','Logic'],['settings','Settings']].forEach(function(t){h+='<button data-a="mt" data-v="'+t[0]+'" aria-pressed="'+(S.mt===t[0])+'">'+t[1]+'</button>'});
    h+='</div>';
    var paused=creature()&&S.mt!=='logic'?'<div class="note">Woodland creatures has its own storybook look, so themes and colorways are paused while it is on. Tap Woodland creatures again to turn it off.</div>':'';
    if(S.mt==='themes'){
      if(!creature())h+='<p class="small">Picking a theme switches to its own colorway. Then try any other colorway on top.</p>';
      h+='<div class="grp"><div class="lab big">Appearance</div><div class="chips sm" role="group" aria-label="Light or dark">';
      [['auto','Auto'],['light','Light'],['dark','Dark']].forEach(function(t){h+='<button data-a="appear" data-v="'+t[0]+'" aria-pressed="'+(S.appear===t[0])+'">'+t[1]+'</button>'});
      h+='</div><p class="small">Auto follows your phone.</p></div>'+paused;
      if(!creature()){
      h+='<div class="grp"><div class="lab mid">Theme</div>';
      Object.keys(LOOKS).forEach(function(k){
        h+='<button class="opt" data-a="look" data-v="'+k+'" aria-pressed="'+(S.look===k)+'">'+(k==='birch'?'<span class="mini qm">'+QUILL+'</span>':k==='meadow'?'<span class="mini qm"><span class="flmini"></span></span>':SVGO.replace('class="sprig"','class="mini"')+MOTIFS[k]+'</svg>')+'<span><b>'+esc(LOOKS[k].name)+'</b>'+(S.look===k?'<span class="small">'+esc(LOOKS[k].blurb)+'</span>':'')+'</span></button>';
      });
      h+='</div><div class="grp"><div class="lab mid">Colorway</div><div class="cws">';
      Object.keys(CWS).forEach(function(k){
        var sw='';CWS[k].sw.forEach(function(c){sw+='<i style="background:'+c+'"></i>'});
        h+='<button class="cw" data-a="cw" data-v="'+k+'" aria-pressed="'+(S.cw===k)+'"><span class="sws">'+sw+'</span>'+esc(CWS[k].name)+'</button>';
      });
      h+='</div><p class="small">Colorways only change the colors, and they work with any Basic theme.</p></div>';
      }
      var wc=creature();
      h+='<div class="grp"><div class="lab big">Premium Themes</div><button class="opt" data-a="prem" aria-pressed="'+wc+'">'+SVGO.replace('class="sprig"','class="mini"')+LOGICS.mammal.icon+'</svg><span><b>'+esc(LOGICS.mammal.name)+'</b>'+(wc?'<span class="small">'+esc(LOGICS.mammal.blurb)+'</span>':'')+'</span><span class="lockic" role="img" aria-label="Premium"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></span></button><p class="small">Premium themes may be a paid feature once the app is finished. For now nothing is locked, so try them freely.</p>';
      if(wc){
        h+='<div class="lab" style="margin-top:12px">Season</div><div class="chips sm">';
        Object.keys(SEASONS).forEach(function(k){h+='<button data-a="season" data-v="'+k+'" aria-pressed="'+(S.season===k)+'">'+SEASONS[k]+'</button>'});
        h+='</div><p class="small">Auto follows your phone or PC\u2019s calendar.</p>';
      }
      h+='</div>';

    }else if(S.mt==='settings'){
      h+='<div class="sethead first">About you</div>'+accountUI();
      h+='<div class="grp"><div class="lab">Take the tour</div><p class="small">A quick walk through the app on a practice copy with examples. Your own things are set aside and come back exactly as they were.</p><button class="btn alt" data-a="tourgo">Start the tour</button></div>';
      h+='<form id="profform" class="grp" style="display:flex;flex-direction:column;gap:4px">'+nameFields(PROF)+'</form>';
      h+='<div class="sethead">General</div>';
      h+='<div class="grp"><div class="lab">How should chance pick for you?</div><p class="small">This is what happens when you tap the button to let chance choose from the things that fit your time. It never picks anything that is not already a good fit.</p>';
      [['plinko','Plinko','A ball drops through the pegs and lands on one of your picks.','<circle cx="10" cy="8" r="2"/><circle cx="22" cy="8" r="2"/><circle cx="16" cy="15" r="2"/><circle cx="16" cy="25" r="3"/>'],['wheel','Spin wheel','Spin once. It slows and lands on one of the things that fit.','<circle cx="16" cy="16" r="11"/><path d="M16 5v22M5 16h22M8.5 8.5l15 15M23.5 8.5l-15 15"/>'],['coin','Coin flip','Two of your things, one flip. Quick and decisive.','<circle cx="16" cy="16" r="11"/><path d="M14 12.5l2.5-1.5v10"/>']].forEach(function(o){
        h+='<button class="opt" data-a="rnd" data-v="'+o[0]+'" aria-pressed="'+(S.rnd===o[0])+'">'+SVGO.replace('class="sprig"','class="mini"')+o[3]+'</svg><span><b>'+o[1]+'</b><span class="small">'+o[2]+'</span></span></button>';
      });
      h+='</div><div class="grp" id="musgrp"><div class="lab">Music buttons</div><p class="small">Pick which buttons show on Home. Turn them all off to hide the music section.</p><div class="chips sm"><button data-a="mustog" data-v="sp" aria-pressed="'+!!S.mus.sp+'">Spotify</button><button data-a="mustog" data-v="am" aria-pressed="'+!!S.mus.am+'">Apple Music</button><button data-a="mustog" data-v="yt" aria-pressed="'+!!S.mus.yt+'">YouTube playlist</button></div></div><div class="grp"><div class="lab">YouTube playlist</div><p class="small">The playlist button on Home opens a playlist Nicole made, which you are welcome to use. Paste a link to your own playlist to swap it, or use the button to link to all of your youtube playlists.</p><form class="add" data-a="ytsave"><input type="text" id="ytlink" inputmode="url" placeholder="https://youtube.com/playlist?list=..." value="'+esc(S.ytl)+'" aria-label="YouTube playlist link"><button type="submit">Save</button></form><div class="chips sm"><button data-a="ytpl">Link to all playlists</button>'+(S.ytl?'<button data-a="ytreset">Back to the original</button>':'')+'</div></div><div class="grp"><div class="lab">Daily text to your partner</div><p class="small">At this time each day, Home shows a card that opens Messages with your plans for the day'+(signedIn()?' and your live schedule link':'')+'. You tap send.</p><div class="chips sm"><button data-a="dtxtog" aria-pressed="'+!!S.dtx.on+'">'+(S.dtx.on?'On':'Off')+'</button></div><input class="field" type="time" id="dtxtime" value="'+esc(S.dtx.time||'09:00')+'" aria-label="Daily text time" style="margin-top:8px;max-width:180px"></div><div class="grp"><div class="lab">Plan tags</div><p class="small">The tags you can pick when adding a plan. Tap one to remove it.</p><div class="chips sm">'+S.evtags.map(function(q,i){return '<button data-a="evtagdel" data-v="'+i+'" aria-label="Remove tag '+esc(q)+'">'+esc(q)+' &times;</button>'}).join('')+'</div><form class="add" data-a="evtagadd"><input type="text" id="evtagnew" maxlength="24" placeholder="New tag, e.g. Gym" aria-label="New plan tag"><button type="submit">Add</button></form></div><div class="grp"><div class="lab">Calendar</div><div class="chips sm"><button data-a="holtog" aria-pressed="'+!!S.hol+'">Show major US holidays</button></div><p class="small">They appear on the Plans tab, and at the top of your plans on Home on the day. They are not plans, so nothing is ever due.</p></div>';
      var ton=tabsOn();
      h+='<div class="grp"><div class="lab">Tabs</div><p class="small">Pick up to four to sit beside Home at the bottom of the screen.</p><div class="chips sm">';
      TABS_ALL.forEach(function(t){h+='<button data-a="tabtog" data-v="'+t[0]+'" aria-pressed="'+(ton.indexOf(t[0])>=0)+'">'+esc(t[0]==='lot'?U().lot:t[1])+'</button>'});
      h+='</div></div>';
      h+='<div class="sethead" id="set-routine">Routine</div>'+routineTab();
      h+='<div class="sethead">Your data</div>';
      h+='<div class="grp"><div class="lab">Back up your data</div><p class="small">'+(signedIn()?'Your account already keeps everything synced. A backup is an extra copy: one small file with your tasks, plans, lists, log and settings, to keep somewhere safe.':'Without an account, everything lives on this device only. A backup is one small file with your tasks, plans, lists, log and settings. Keep it somewhere safe, or use it to move to a new phone.')+'</p><button class="btn" data-a="dexport">Save a backup</button></div>';
      h+='<div class="grp"><div class="lab">Restore from a backup</div><p class="small">This replaces what is on this device with what is in the file.</p><label class="btn alt" style="cursor:pointer">Choose a backup file<input type="file" id="dimport" accept=".json,application/json" hidden></label></div>';
      if(S.dataPending)h+='<div class="note" role="alert">Found a backup with '+S.dataPending.n+' saved items'+(S.dataPending.when?' from '+esc(S.dataPending.when):'')+'. Replace what is on this device with it?<div class="row" style="margin-top:10px"><button class="btn grow" data-a="dgo">Yes, restore it</button><button class="btn alt grow" data-a="dno">Cancel</button></div></div>';
      if(S.dataMsg)h+='<div class="note" role="status">'+esc(S.dataMsg)+'</div>';
    }else{
      h+='<div class="grp"><div class="lab mid">What&rsquo;s your mindset today?</div><p class="small">This changes how the app thinks.</p>';
      Object.keys(LOGICS).forEach(function(k){
        if(k==='mammal')return;
        h+='<button class="opt" data-a="logic" data-v="'+k+'" aria-pressed="'+(S.logic===k)+'">'+SVGO.replace('class="sprig"','class="mini"')+LOGICS[k].icon+'</svg><span><b>'+esc(LOGICS[k].name)+'</b>'+(S.logic===k?'<span class="small">'+esc(LOGICS[k].blurb)+'</span>':'')+'</span></button>';
      });
      h+='<p class="small">Your plans, lists and log stay exactly the same, so you can switch whenever you feel like it.</p></div>';
      if(creature())h+='<div class="note">Woodland creatures is on, and it sets its own voice. You can turn it off under Premium Themes in the Themes tab, or pick a mindset above to switch.</div>';
    }
    h+='</div></div>';
    return h;
  }

  /* tabs: Home stays in the middle; the rest can be turned on or off in Settings.
     Until someone chooses, Us shows only when a partner is set; otherwise the parking lot takes its place. */
  var TABS_ALL=[['lists','Lists'],['ov','Plans'],['lot','Parking lot'],['us','Us'],['log','Log']];
  function tabsOn(){var t=load('gs-tabs',null);if(Array.isArray(t))return t;return (PROF&&PROF.partner)?['lists','ov','us','log']:['lists','ov','lot','log']}
  function tabs(){
    var h='',on=tabsOn(),list=TABS_ALL.filter(function(t){return on.indexOf(t[0])>=0}).map(function(t){return t[0]==='lot'?['lot',U().lot]:t});
    list.splice(Math.floor(list.length/2),0,['today','Home']);
    list.forEach(function(t){
      h+='<button data-a="tab" data-v="'+t[0]+'"'+(S.tab===t[0]?' aria-current="page"':'')+'>'+ICON[t[0]]+t[1]+'</button>';
    });
    return h;
  }


  /* Meadow: wavy ribbon frame with a bow on cards, drawn to each card's size */
  function wavyPath(w,h,inset,amp,lam,r){
    var x0=inset,y0=inset,W=w-2*inset,H=h-2*inset;r=Math.min(r,W/2,H/2);
    var segs=[[x0+r,y0,1,0,W-2*r],[x0+W,y0+r,0,1,H-2*r],[x0+W-r,y0+H,-1,0,W-2*r],[x0,y0+H-r,0,-1,H-2*r]];
    var base=[],step=2.5;
    segs.forEach(function(g,i){
      var n1=Math.max(1,Math.round(g[4]/step));for(var k=0;k<n1;k++){var t=g[4]*k/n1;base.push([g[0]+g[2]*t,g[1]+g[3]*t,g[3],-g[2]])}
      var cx=[x0+W-r,x0+W-r,x0+r,x0+r][i],cy=[y0+r,y0+H-r,y0+H-r,y0+r][i],a0=[-Math.PI/2,0,Math.PI/2,Math.PI][i],n2=Math.max(2,Math.round(Math.PI/2*r/step));
      for(var u=0;u<n2;u++){var ang=a0+Math.PI/2*u/n2;base.push([cx+r*Math.cos(ang),cy+r*Math.sin(ang),Math.cos(ang),Math.sin(ang)])}
    });
    var len=[0];for(var i=1;i<base.length;i++)len.push(len[i-1]+Math.hypot(base[i][0]-base[i-1][0],base[i][1]-base[i-1][1]));
    var tot=len[len.length-1]+Math.hypot(base[0][0]-base[base.length-1][0],base[0][1]-base[base.length-1][1]),n=Math.max(4,Math.round(tot/lam));
    return 'M'+base.map(function(p,i){var o=amp*Math.sin(2*Math.PI*n*len[i]/tot);return (p[0]+p[2]*o).toFixed(1)+' '+(p[1]+p[3]*o).toFixed(1)}).join('L')+'Z';
  }
  function meadowFrames(){
    if(lookKey()!=='meadow')return;
    document.querySelectorAll('#app .card').forEach(function(el){
      var w=el.offsetWidth,h=el.offsetHeight;if(!w||!h)return;
      /* a closed <details> only shows its summary, so its frame lives inside the summary */
      var host=el.tagName==='DETAILS'?(el.querySelector(':scope>summary')||el):el;
      var f=host.querySelector(':scope>.mframe');if(f&&f.dataset.sz===w+'x'+h)return;
      if(!f){f=document.createElement('span');f.className='mframe';f.setAttribute('aria-hidden','true');host.insertBefore(f,host.firstChild)}
      f.dataset.sz=w+'x'+h;var d=wavyPath(w,h,6,3.2,46,22);
      f.innerHTML='<svg width="'+w+'" height="'+h+'"><path d="'+d+'" style="fill:var(--surface);stroke:var(--accent)" stroke-width="5.5" stroke-linejoin="round"/><path d="'+d+'" fill="none" style="stroke:var(--surface)" stroke-width="2"/></svg><i class="bw bl"></i><i class="bw bf"></i>';
    });
  }
  window.addEventListener('resize',function(){clearTimeout(meadowFrames.t);meadowFrames.t=setTimeout(meadowFrames,120)});
  document.addEventListener('toggle',function(){meadowFrames()},true);
  /* Original: the birch is painted as the page's own background (drawn once per colorway into an image),
     so Safari also shows it behind the status bar and in the bounce, where it only paints the page background.
     Its first sprout lines up just above the date. */
  var TREE={imgs:null,key:'',url:''};
  function treeImgs(cb){
    if(TREE.imgs)return cb(TREE.imgs);
    var names=['bark','leaf','line'],out={},n=0;
    names.forEach(function(k){var im=new Image();im.onload=im.onerror=function(){out[k]=im;if(++n===names.length){TREE.imgs=out;cb(out)}};im.src='art/birch-'+k+'.png'});
  }
  function cssColor(v){var d=document.createElement('i');d.style.color=v;d.style.display='none';document.body.appendChild(d);var c=getComputedStyle(d).color;d.remove();
    var m=c.match(/color\(srgb ([\d.]+) ([\d.]+) ([\d.]+)/);if(m)return 'rgb('+Math.round(m[1]*255)+','+Math.round(m[2]*255)+','+Math.round(m[3]*255)+')';return c}
  function placeTree(){
    var R=document.documentElement;
    if(lookKey()!=='original'){if(TREE.key){R.style.removeProperty('--trunk-img');TREE.key=''}return}
    var hl=document.querySelector('#app .head .top .date')||document.querySelector('#app .hello');
    if(hl){var y=hl.getBoundingClientRect().top+window.scrollY-2;R.style.setProperty('--trunk-pos',Math.round(y-52)+'px')}
    var cols=[cssColor('var(--bark)'),cssColor('var(--bark-leaf)'),cssColor('var(--trunk-line, var(--bark-line))')],dpr=Math.min(3,window.devicePixelRatio||1),key=cols.join('|')+'@'+dpr;
    if(key===TREE.key)return;TREE.key=key;
    treeImgs(function(I){
      if(TREE.key!==key)return;
      var w=Math.round(44*dpr),h=Math.round(I.bark.naturalHeight*44/I.bark.naturalWidth*dpr),cv=document.createElement('canvas');cv.width=w;cv.height=h;var g=cv.getContext('2d');
      [['bark',cols[0]],['leaf',cols[1]],['line',cols[2]]].forEach(function(L){
        var t=document.createElement('canvas');t.width=w;t.height=h;var tg=t.getContext('2d');
        tg.drawImage(I[L[0]],0,0,w,h);tg.globalCompositeOperation='source-in';tg.fillStyle=L[1];tg.fillRect(0,0,w,h);g.drawImage(t,0,0);
      });
      try{R.style.setProperty('--trunk-img','url('+cv.toDataURL('image/png')+')')}catch(e){}
    });
  }
  window.addEventListener('resize',function(){clearTimeout(placeTree.t);placeTree.t=setTimeout(placeTree,120)});
  try{new ResizeObserver(function(){clearTimeout(placeTree.t);placeTree.t=setTimeout(placeTree,60)}).observe(document.body)}catch(e){}
  try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',function(){setTimeout(placeTree,50)})}catch(e){}
  function render(){
    var tk=ymd(new Date());if(S.statusDay!==tk){S.status={};S.statusDay=tk}
    var js=JSON.stringify(S.status);if(js!==S.statusSaved){S.statusSaved=js;save('gs-status',{d:tk,s:S.status})}
    if(S.pv){document.getElementById('app').innerHTML=pvHtml(S.pv);document.getElementById('tabs').innerHTML='';document.getElementById('sheetRoot').innerHTML='';return}
    if(lowRevert()){S.shift=0;S.skipPark=[];try{applyLook()}catch(e){}}
    genReps();
    var app=document.getElementById('app');
    var _sl=document.getElementById('simslider'),keepSl=(_sl&&document.activeElement===_sl)?_sl:null;
    app.classList.toggle('wide',S.tab==='ov');
    app.innerHTML=fx(demoBar()+(S.tab==='today'?today():S.tab==='ov'?overview():S.tab==='lot'?lotPage():S.tab==='lists'?lists():S.tab==='log'?logview():us()));
    if(keepSl){var _ns=document.getElementById('simslider');if(_ns&&_ns.parentNode)_ns.parentNode.replaceChild(keepSl,_ns)}
    document.getElementById('tabs').innerHTML=fx(tabs());
    var _hh=app.querySelector('.hero h2'),_hk=_hh?_hh.textContent:'';
    if(_hk&&_hk===render.lastHero){app.querySelectorAll('.hero').forEach(function(e){e.style.animation='none'})}
    render.lastHero=_hk;
    var _l=document.querySelector('.lot'),_st=_l?_l.scrollTop:0;
    var _sc={};document.querySelectorAll('#sheetRoot .sheet[aria-label]').forEach(function(s){_sc[s.getAttribute('aria-label')]=s.scrollTop});
    document.getElementById('sheetRoot').innerHTML=fx(roughSheet()+startSheet()+setupSheet()+menuSheet()+rtSheet()+evSheet()+skipSheet()+forgotSheet()+catSheet()+seSheet()+itSheet()+reSheet()+nameSheet()+tkSheet()+lotSheet()+plSheet()+fab()+tourCard()+welcomeSheet());
    document.querySelectorAll('#sheetRoot .sheet[aria-label]').forEach(function(s){var k=s.getAttribute('aria-label');if(_sc[k])s.scrollTop=_sc[k]});
    if(S.tour!==null)tourApply(false);
    var _l2=document.querySelector('.lot');if(_l2)_l2.scrollTop=_st;
    try{publishLive()}catch(e){}
    try{meadowFrames()}catch(e){}
    try{placeTree()}catch(e){}
  }

  function logIt(label,extra,onDay){
    var d=new Date(),opts={month:'short',day:'numeric'};
    if(onDay&&S.day){var p=S.day.split('-');d=new Date(+p[0],+p[1]-1,+p[2],12,0,0)}
    var when=(onDay&&S.day)?d.toLocaleDateString(undefined,opts):d.toLocaleDateString(undefined,opts)+', '+d.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});
    var en={label:label,ts:d.toISOString(),when:when};
    if(extra&&extra.trk)en.trk=extra.trk;
    if(extra){['sev','meds','trig','symp'].forEach(function(k){if(extra[k]&&(!Array.isArray(extra[k])||extra[k].length))en[k]=extra[k]})}
    S.log.push(en);
    if(!(extra&&extra.trk))colorOf(label);
    save('gs-log',S.log);
  }
  function openIds(){return Array.prototype.map.call(document.querySelectorAll('details.lcard[open]'),function(d){return d.dataset.id})}
  function reopen(ids){ids.forEach(function(id){var d=document.querySelector('details.lcard[data-id="'+id+'"]');if(d)d.open=true})}
  function keepOpen(){var ids=openIds();render();reopen(ids)}
  function resetForm(){S.f={sels:[],td:{}}}
  /* a save that is missing something: show the note, then point at the field itself */
  function errAt(sel){
    keepSheet(render);var sh=document.querySelectorAll('#sheetRoot .sheet'),el=null;
    for(var i=sh.length-1;i>=0&&!el;i--)el=sh[i].querySelector(sel);
    if(!el)return;var box=el.closest('.tfield')||el;box.classList.add('fielderr');
    var nt=el.closest('.sheet').querySelector('.note[role=alert]'),msg=null;if(nt){msg=document.createElement('p');msg.className='small fielderrmsg';msg.setAttribute('role','alert');msg.textContent=nt.textContent;box.insertAdjacentElement('afterend',msg)}
    el.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
    if(el.matches('input'))try{el.focus({preventScroll:true})}catch(x){}
    var clear=function(){box.classList.remove('fielderr');if(msg&&msg.parentNode)msg.parentNode.removeChild(msg);el.removeEventListener('input',clear);el.removeEventListener('change',clear)};el.addEventListener('input',clear);el.addEventListener('change',clear);
  }
  function keepSheet(fn){var sh=document.querySelector('.sheet'),st=sh?sh.scrollTop:0;fn();var s2=document.querySelector('.sheet');if(s2)s2.scrollTop=st}
  function closeSheets(){S.menu=false;S.rp=null;S.ev=null;S.ns=null;S.tk=null;S.pl=null;S.sq=null;S.fg=null;S.ce=null;S.se=null;S.re=null}

  var A={
    appear:function(b){keepSheet(function(){S.appear=b.dataset.v;save('gs-appear',S.appear);applyLook();render()})},
    mt:function(b){keepSheet(function(){S.mt=b.dataset.v;render()})},
    prem:function(){keepSheet(function(){clearLowTmp();var was=S.logic;if(was==='mammal'){var pv=load('gs-prevlogic','gentle');S.logic=(LOGICS[pv]&&pv!=='mammal')?pv:'gentle'}else{save('gs-prevlogic',was);S.logic='mammal'}S.shift=0;S.skipPark=[];save('gs-logic',S.logic);applyLook();render()})},
    logic:function(b){keepSheet(function(){clearLowTmp();S.logic=b.dataset.v;S.shift=0;S.skipPark=[];save('gs-logic',S.logic);applyLook();render()})},
    slide:function(){S.shift+=15;render();toast('Everything after this moved 15 minutes later.')},
    unslide:function(){S.shift=0;render()},
    stuck:function(){S.chat.open=true;render();chatRender();focusChat()},
    cclose:function(){chatClose()},
    cbg:function(b,e){if(e.target===b)chatClose()},
    cnew:function(){if(CHATCTL)CHATCTL.abort();S.chat.opts=null;S.chat.act=[];S.chat.msgs=[];S.chat.err='';S.chat.retry='';S.chat.busy=false;S.chat.wait=false;chatRender();focusChat()},
    cstop:function(){if(CHATCTL)CHATCTL.abort()},
    chpapp:function(){var c=S.chat;c.opts=HELP['A question about the app'].o;c.act=[];c.appq=false;c.msgs.push({r:'a',t:'What else would you like to know?',fresh:1});chatRender()},
    cstart:function(b){if(S.noAI)helpPick(b.dataset.v);else chatSend(b.dataset.v)},
    chp:function(b){helpPick(b.dataset.v)},
    hact:function(b){var k=b.dataset.v;S.chat.open=false;chatRender();if(A[k])A[k](b);else render()},
    cretry:function(){var t=S.chat.retry;if(!t)return;var m=S.chat.msgs;if(m.length&&m[m.length-1].r==='u'&&m[m.length-1].t===t)m.pop();chatSend(t)},
    wskip:function(){saveProf({});saveTrk();afterWelcome();render()},
    welskip:function(){S.welInfo=true;render()},
    startcust:function(){clearExamples();S.startQ=false;save('gs-startq',false);S.tab='today';S.setup=suNew();render()},
    'su-sel':function(b){suRead();keepSheet(function(){var a=S.setup.sel,v=b.dataset.v,i=a.indexOf(v);if(i>=0)a.splice(i,1);else a.push(v);S.setup.floor=null;render()})},
    'su-floor':function(b){keepSheet(function(){var a=S.setup.floor,v=b.dataset.v,i=a.indexOf(v);if(i>=0)a.splice(i,1);else a.push(v);render()})},
    'su-start':function(b){keepSheet(function(){S.setup.start=S.setup.start===b.dataset.v?null:b.dataset.v;render()})},
    'su-help':function(b){keepSheet(function(){var a=S.setup.helps,v=b.dataset.v,i=a.indexOf(v);if(i>=0)a.splice(i,1);else a.push(v);render()})},
    'su-mus':function(b){keepSheet(function(){var a=S.setup.mus,v=b.dataset.v,i=a.indexOf(v);if(i>=0)a.splice(i,1);else a.push(v);render()})},
    'su-back':function(){suRead();S.setup.i--;render()},
    'su-next':function(){suRead();if(S.setup.i===4){suFinish();render();toast('You are set up. Change any of it in the menu, under Settings.')}else{S.setup.i++;render();var sh=document.querySelector('.sheet');if(sh)sh.scrollTop=0}},
    'su-skip':function(){suRead();var U2=S.setup;
      if(U2.i===1)U2.floor=null;else if(U2.i===2)U2.tasks=['','',''];else if(U2.i===3)U2.start=null;else if(U2.i===4){U2.helps=[];U2.mus=[]}
      if(U2.i===4){suFinish();render();toast('You are set up. Change any of it in the menu, under Settings.')}else{U2.i++;render()}},
    'jl-tog':function(b){var v=b.dataset.v,i=S.jl.indexOf(v);if(i>=0)S.jl.splice(i,1);else S.jl.push(v);render()},
    'jl-make':function(){S.jl.forEach(function(n,i){S.lists.push({id:'l'+Date.now()+i,name:n,items:[]})});save('gs-lists',S.lists);S.jl=[];S.hints.jitlists=1;save('gs-hints',S.hints);render()},
    'jg-tog':function(b){var v=b.dataset.v,i=S.jg.indexOf(v);if(i>=0)S.jg.splice(i,1);else S.jg.push(v);render()},
    'jg-save':function(){S.cats=S.jg.slice();save('gs-cats',S.cats);S.jg=null;S.hints.jitlog=1;save('gs-hints',S.hints);render()},
    jitmode:function(b){clearLowTmp();S.logic=b.dataset.v;save('gs-logic',S.logic);S.shift=0;S.skipPark=[];applyLook();S.hints.jitmode=1;save('gs-hints',S.hints);render();toast('Switched. You can change it any time in the menu, under Logic.')},
    startlook:function(){tourStart(true)},
    tourgo:function(){tourStart(false)},
    tournext:function(){tourGo(S.tour+1)},
    tourback:function(){tourGo(S.tour-1)},
    tourend:function(){tourEnd()},
    welnext:function(){var n=document.getElementById('pf-name');S.welName=n?n.value:'';S.welP2=true;render();var f=document.querySelector('#welcomeform input:not([type=hidden])');if(f)f.focus()},
    welback:function(){S.welP2=false;render()},
    incl:function(b){keepSheet(function(){keepAll(function(){S.incl=S.incl||{};S.incl[b.dataset.v]=!S.incl[b.dataset.v];render()})});
      if(document.getElementById('profform')){var v=profVals();saveProfVals(v,b.dataset.v==='health'&&!S.incl.health)}},
    dexport:function(){
      var o={app:'gentle-start',version:1,saved:new Date().toISOString(),data:{}};
      try{for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k.indexOf('gs-')===0)o.data[k]=localStorage.getItem(k)}}catch(e){}
      var json=JSON.stringify(o,null,1),name='gentle-start-backup-'+ymd(new Date())+'.json';
      var file=null;try{file=new File([json],name,{type:'application/json'})}catch(e){}
      function viaLink(){
        var a=document.createElement('a'),u=URL.createObjectURL(new Blob([json],{type:'application/json'}));
        a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000);
        S.dataMsg='Backup saved as '+name+'.';keepSheet(render);
      }
      if(file&&navigator.canShare&&navigator.canShare({files:[file]})){
        navigator.share({files:[file],title:'Gentle Start backup'}).then(function(){S.dataMsg='Backup shared. Keep that file somewhere safe.';keepSheet(render)},function(e){if(e&&e.name!=='AbortError')viaLink()});
      }else viaLink();
    },
    dgo:function(){
      var p=S.dataPending;if(!p)return;
      try{
        var del=[];for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);if(k.indexOf('gs-')===0)del.push(k)}
        del.forEach(function(k){localStorage.removeItem(k)});
        Object.keys(p.data).forEach(function(k){if(k.indexOf('gs-')===0&&typeof p.data[k]==='string')localStorage.setItem(k,p.data[k])});
        localStorage.setItem('gs-sync-pushall','1');
        location.reload();
      }catch(e){S.dataMsg='That did not work. Nothing was changed.';S.dataPending=null;keepSheet(render)}
    },
    dno:function(){S.dataPending=null;S.dataMsg='';keepSheet(render)},
    rmsample:function(){S.log=S.log.filter(function(e){return !e.smp});save('gs-log',S.log);render();toast('Sample entries removed.')},
    mood:function(b){keepSheet(function(){try{localStorage.removeItem('gs-moodtmp')}catch(e){}S.mood=b.dataset.v;if(S.mood==='slow')bearFirst();S.skipPark=[];save('gs-mood',S.mood);render()})},
    season:function(b){keepSheet(function(){S.season=b.dataset.v;save('gs-season',S.season);applyLook();render()})},
    critter:function(){S.cr=(S.cr||0)+1;render()},
    ytpl:function(){S.ytl='https://www.youtube.com/feed/playlists';save('gs-ytl',S.ytl);keepSheet(render);toast('Saved.')},
    ytreset:function(){S.ytl='';save('gs-ytl','');keepSheet(render);toast('Back to the original playlist.')},
    evtagdel:function(b){S.evtags.splice(+b.dataset.v,1);save('gs-evtags',S.evtags);keepSheet(render)},
    holtog:function(){S.hol=!S.hol;save('gs-hol',S.hol);keepSheet(render)},
    rnd:function(b){S.rnd=b.dataset.v;save('gs-rnd',S.rnd);keepSheet(render)},
    rndskip:function(){var P=S.pl;if(!P||!P.mode||P.phase==='done')return;clearTimeout(P.timer);P.phase='done';render()},
    rndagain:function(){var P=S.pl;if(!P||!P.mode||P.drops>=2)return;rndStart()},
    plopen:function(){var pool=plPool();if(pool.length<2)return;if(S.rnd!=='plinko'){var sm=plSample(pool);if(S.rnd==='coin')sm=sm.slice(0,2);S.pl={ids:sm.map(function(t){return t.id}),drops:0,mode:S.rnd};rndStart();return}S.pl={ids:plSample(pool).map(function(t){return t.id}),drops:0};plDrop();render();plAnimate()},
    plagain:function(){if(!S.pl||S.pl.drops>=2)return;plDrop();render();plAnimate()},
    plskip:function(){plLand()},
    plclose:function(){plAnimate.id++;if(S.pl&&S.pl.timer)clearTimeout(S.pl.timer);S.pl=null;render()},
    plbg:function(b,e){if(e.target===b)A.plclose()},
    plstart:function(b){var id=b.dataset.v;plAnimate.id++;S.pl=null;S.lot=false;S.doing=id;S.askMore=false;S.celeb=null;S.tab='today';render();window.scrollTo(0,0)},
    lot:function(){S.lot=true;S.lotAnim=true;render();S.lotAnim=false},
    lclose:function(){S.lot=false;render()},
    lbg:function(b,e){if(e.target===b){S.lot=false;render()}},
    lottab:function(b){S.lotTab=b.dataset.v;S.lotGroup=null;render()},
    lgopen:function(b){S.lotGroup=b.dataset.v;render()},
    lgback:function(){S.lotGroup=null;render()},
    lgdel:function(b){var id=b.dataset.v,n=S.tasks.filter(function(t){return !t.done&&t.g===id}).length;if(n&&!confirm('Delete this group? Its '+n+' task'+(n===1?'':'s')+' stay in the parking lot, just without a group.'))return;S.groups=S.groups.filter(function(g){return g.id!==id});S.tasks.forEach(function(t){if(t.g===id)delete t.g});save('gs-groups',S.groups);saveTasks();S.lotGroup=null;render()},
    ovv:function(b){S.ovv=b.dataset.v;render()},
    ovtoday:function(){S.ovMo=0;S.ovDay=ymd(new Date());render()},
    ovprev:function(){S.ovMo-=1;S.ovDay=null;render()},
    ovnext:function(){S.ovMo+=1;S.ovDay=null;render()},
    ovday:function(b){S.ovDay=S.ovDay===b.dataset.k?null:b.dataset.k;render()},
    evnewon:function(b){var k=b.dataset.v;S.ev=newEv();S.ev.dk=k===ymd(new Date())?'today':k===ymd(addDays(new Date(),1))?'tomorrow':'other';S.ev.dateVal=k;render()},
    ptog:function(b){var id=b.dataset.v;if(S.status[id]==='done')delete S.status[id];else S.status[id]='done';render()},
    caredid:function(){toast('That counts. Resting is the task.');S.careIdx=(S.careIdx+1)%Math.max(1,careList().length);render()},
    carenext:function(){S.careIdx=(S.careIdx+1)%Math.max(1,careList().length);render()},
    tkopen:function(b){
      var t=taskById(b.dataset.v);if(!t)return;
      S.tk={g:t.g||'',rpt:(function(){var r=t.rep&&S.reps.filter(function(x){return x.id===t.rep})[0];return r?rptCopy(r):rptNew()})(),repId:t.rep||null,id:t.id,title:t.title,h:t.h||'week',must:!!t.must,nr:!!t.nr,fun:!!t.fun,bd:!!t.bd,work:(t.work||[]).slice(),mins:t.mins||0,w:t.w||'med',due:dueOf(t),steps:t.steps.map(function(x){return {t:x.t,done:x.done}}),newStep:'',err:''};render();
    },
    tkclose:function(){S.tk=null;render()},
    tkbg:function(b,e){if(e.target===b){S.tk=null;render()}},
    tkh:function(b){keepSheet(function(){syncTk();S.tk.h=b.dataset.v;render()})},
    tkmins:function(b){keepSheet(function(){syncTk();S.tk.mins=+b.dataset.v;render()})},
    tktag:function(b){keepSheet(function(){syncTk();var k=b.dataset.v;S.tk[k]=!S.tk[k];render()})},
    tkw:function(b){keepSheet(function(){syncTk();S.tk.w=b.dataset.v;render()})},
    tkclr:function(){keepSheet(function(){syncTk();S.tk.due='';render()})},
    tksuggest:function(){
      keepSheet(function(){
        syncTk();commitStep();var T=S.tk,have=T.steps.map(function(x){return x.t.toLowerCase()}),added=0;
        suggestSteps(T.title).forEach(function(s){if(T.steps.length<12&&have.indexOf(s.toLowerCase())<0){T.steps.push({t:s,done:false});added++}});
        render();toast(added?'Added '+added+' to start you off. Change them however you like.':'Those are already in there.')
      })
    },
    tkstepadd:function(){keepSheet(function(){syncTk();commitStep();render();var i=document.getElementById('tk-step');if(i)i.focus()})},
    tkstepdel:function(b){keepSheet(function(){syncTk();S.tk.steps.splice(+b.dataset.i,1);render()})},
    tkstepdone:function(b){keepSheet(function(){syncTk();var x=S.tk.steps[+b.dataset.i];if(x)x.done=!x.done;render()})},
    tksave:function(){
      syncTk();var T=S.tk;commitStep();T.err='';
      if(!T.title.trim()){T.err='Give it a name or pick a tag first.';errAt('#tk-title');return}
      if(T.rpt&&T.rpt.rep==='w'&&!T.rpt.days.length){T.err='Pick which days it repeats.';errAt('[aria-label="Days"]');return}
      if(T.id&&T.repId&&!T.scope){T.ask='save';keepSheet(render);var _a=document.querySelector('.askseries');if(_a)_a.scrollIntoView({block:'center'});return}
      if(T.scope==='one'){var o1=taskById(T.id);if(o1){o1.title=T.title.trim();o1.g=T.g||undefined;o1.h=T.h;o1.must=T.h==='day'&&!!T.must;if(T.h==='day'&&!o1.dayOf)o1.dayOf=ymd(new Date());o1.nr=T.nr;o1.fun=T.fun;o1.bd=T.bd;o1.mins=T.mins;o1.w=T.w;o1.due=T.due||'';o1.steps=T.steps}saveTasks();S.tk=null;render();toast('Saved for this one. The repeat stays as it was.');return}
      var old=T.id?taskById(T.id):null,repId=T.repId||null;
      if(T.rpt&&T.rpt.rep!=='none'){
        var rr=rptCopy(T.rpt);rr.anchor=T.rpt.anchor||ymd(new Date());rr.id=repId||('p'+Date.now());rr.t=T.title.trim().slice(0,50);rr.part='afternoon';rr.as='lot';
        var ri=-1;S.reps.forEach(function(x,i){if(x.id===rr.id)ri=i});if(ri>=0)S.reps[ri]=rr;else S.reps.push(rr);repId=rr.id;S.repSeen[rr.id]=ymd(new Date());save('gs-repseen',S.repSeen);syncSteps();saveRtn();
      }else if(repId){S.reps=S.reps.filter(function(x){return x.id!==repId});repId=null;saveRtn()}
      var rec={g:T.g||undefined,rep:repId||undefined,id:T.id||('t'+Date.now()),title:T.title.trim(),h:T.h,must:T.h==='day'&&!!T.must,dayOf:T.h==='day'?((old&&old.h==='day'&&old.dayOf)||ymd(new Date())):undefined,nr:T.nr,fun:T.fun,bd:T.bd,mins:T.mins,w:T.w,due:T.due||'',steps:T.steps,work:old?(old.work||[]):[],done:old?old.done:false,created:old?old.created:Date.now(),doneAt:old?old.doneAt:0,snooze:old?old.snooze:''};
      if(old){S.tasks[S.tasks.indexOf(old)]=rec}else S.tasks.unshift(rec);
      saveTasks();S.tk=null;render();toast('Saved.');
    },
    tkdel:function(){var T=S.tk;if(T&&T.repId&&!T.scope){T.ask='del';keepSheet(render);var _a=document.querySelector('.askseries');if(_a)_a.scrollIntoView({block:'center'});return}
      if(T&&T.scope==='all'&&T.repId){var rid=T.repId;S.reps=S.reps.filter(function(x){return x.id!==rid});saveRtn()}
      var id=S.tk&&S.tk.id;S.tasks=S.tasks.filter(function(t){return t.id!==id});if(S.doing===id)S.doing=null;saveTasks();S.tk=null;render();toast('Removed. Nothing else changes.')},
    tkgo:function(){
      syncTk();var T=S.tk;if(!T||!T.id)return;var t=taskById(T.id);
      if(t){t.steps=T.steps;t.title=T.title.trim()||t.title;t.mins=T.mins;t.w=T.w;t.h=T.h;t.nr=T.nr;t.fun=T.fun;t.bd=T.bd;t.due=T.due||'';t.ex=false;saveTasks();S.doing=t.id;S.askMore=false}
      S.tk=null;S.lot=false;S.tab='today';render();window.scrollTo(0,0);
    },
    tkdone:function(b){var t=taskById(b.dataset.v);if(!t)return;t.done=true;t.doneAt=Date.now();if(S.doing===t.id)S.doing=null;saveTasks();finishNote(t.id)},
    tkundo:function(b){var t=taskById(b.dataset.v);if(!t)return;t.done=false;saveTasks();render()},
    tkclear:function(){S.tasks=S.tasks.filter(function(t){return !t.done});saveTasks();render()},
    tkstart:function(b){S.doing=b.dataset.v;S.askMore=false;S.celeb=null;render();window.scrollTo(0,0)},
    tkhard:function(b){S.doing=b.dataset.v;S.askMore=false;S.celeb=b.dataset.v;render();window.scrollTo(0,0)},
    tkanother:function(b){S.skipPark.push(b.dataset.v);render()},
    tklater:function(b){var t=taskById(b.dataset.v);if(!t)return;t.snooze=ymd(new Date());saveTasks();render();toast('Back tomorrow. No pressure.')},
    tkfinish:function(){var t=taskById(S.doing);if(!t)return;t.done=true;t.doneAt=Date.now();saveTasks();if(!t.bd)S.doing=null;S.askMore=false;finishNote(t.id)},
    tkstep:function(){
      var t=taskById(S.doing);if(!t)return;var fs=firstStep(t);
      if(fs)fs.done=true;
      (t.work=t.work||[]).push(Date.now());saveTasks();S.askMore=true;render();
    },
    tkcont:function(){S.askMore=false;render()},
    tkpause:function(){S.doing=null;S.askMore=false;render();toast('Saved on the task. It is still waiting for you, no rush.')},
    tkstop:function(){S.doing=null;S.askMore=false;render()},
    tkbreak:function(){
      syncTk();var T=S.tk;
      if(!T.title.trim()){T.err='Name it first, then I can break it down.';keepSheet(render);return}
      if(S.tkBusy)return;S.tkBusy=true;T.err='';keepSheet(render);
      getSample().then(function(sample){
        if(!sample)throw {code:'not_granted'};
        return sample.json('Break this task into 3 to 6 tiny physical first actions for someone who struggles to start things. Each step is a short imperative phrase (under 9 words) that takes about 5 minutes or less, and the first one is almost effortless. Task: "'+T.title.trim().slice(0,200)+'"'+(T.steps.length?'\nSteps already listed (do not repeat): '+T.steps.map(function(x){return x.t}).join('; '):'')+'\nReply with only a JSON array of strings.',{modelTier:'quick',cache:false});
      }).then(function(arr){
        if(!Array.isArray(arr))throw {code:'invalid_json'};
        arr.slice(0,6).forEach(function(x){x=String(x).trim();if(x&&T.steps.length<12)T.steps.push({t:x.slice(0,80),done:false})});
      }).catch(function(e){
        T.err=(e&&e.code==='not_granted')?'The step-maker is not switched on for this page. You can add steps yourself.':'That did not go through. Try again, or add steps yourself.';
      }).then(function(){S.tkBusy=false;if(S.tk===T){syncTk();keepSheet(render)}});
    },
    menu:function(){S.menu=true;S.rtEdit=false;S.profSaved=false;render()},
    hintx:function(b){S.hints[b.dataset.v]=1;save('gs-hints',S.hints);var ids=openIds();render();reopen(ids)},
    uslive:function(){publishLive.last=null;publishLive();sendOut('',liveUrl(),'Live link copied.')},
    dtxsent:function(b,e){save('gs-dtx-day',ymd(new Date()));setTimeout(render,400)},
    dtxskip:function(){save('gs-dtx-day',ymd(new Date()));render()},
    dtxtog:function(){S.dtx.on=!S.dtx.on;save('gs-dtx',S.dtx);keepSheet(render)},
    usadd:function(){S.menu=true;S.mt='settings';S.incl=inclOf(PROF);S.incl.partner=true;render();var f=document.getElementById('pf-partner');if(f){f.scrollIntoView({block:'center'});f.focus()}},
    acgoogle:function(){window.GSSync&&window.GSSync.google()},
    acout:function(){if(window.GSSync&&confirm('Sign out? Everything stays on this device; it just stops syncing.'))window.GSSync.signOut()},
    acsync:function(){window.GSSync&&window.GSSync.flush();toast('Syncing.')},
    musset:function(){S.menu=true;S.mt='settings';render();var g=document.getElementById('musgrp');if(g)g.scrollIntoView({block:'start'})},
    mustog:function(b){var k=b.dataset.v;S.mus[k]=!S.mus[k];save('gs-mus',S.mus);keepSheet(render)},
    mclose:function(){S.menu=false;render()},
    mbg:function(b,e){if(e.target===b){S.menu=false;render()}},
    look:function(b){keepSheet(function(){S.look=b.dataset.v;S.cw=LOOKS[S.look].cw;save('gs-look',S.look);save('gs-cw',S.cw);applyLook();render()})},
    cw:function(b){keepSheet(function(){S.cw=b.dataset.v;save('gs-cw',S.cw);applyLook();render()})},
    rtedmode:function(){keepSheet(function(){S.rtEdit=!S.rtEdit;S.rtAdd=null;render()})},
    rtclose:function(){keepSheet(function(){S.rtEdit=false;S.rtAdd=null;render()})},
    rtbg:function(b,e){if(e.target===b)keepSheet(function(){S.rtEdit=false;S.rtAdd=null;render()})},
    rtaddopen:function(b){var p=b.dataset.v;S.rtAdd=S.rtAdd===p?null:p;keepSheet(render);var i=document.getElementById('rtadd-'+p);if(i)i.focus()},
    rtmove:function(b){var id=b.dataset.v,to=b.dataset.p;if(S.rtn.parts[to].indexOf(id)>=0)return;['morning','afternoon','evening'].forEach(function(p){S.rtn.parts[p]=S.rtn.parts[p].filter(function(x){return x!==id})});S.rtn.parts[to].push(id);saveRtn();keepSheet(render)},
    tabtog:function(b){keepSheet(function(){var a=tabsOn().slice(),v=b.dataset.v,i=a.indexOf(v);
      if(i>=0)a.splice(i,1);else{if(a.length>=4){toast('Up to four tabs beside Home. Turn one off first.');return}a.push(v)}
      save('gs-tabs',a);render()})},
    lexp:function(){var ds=document.querySelectorAll('details.lcard'),open=Array.prototype.some.call(ds,function(d){return !d.open});ds.forEach(function(d){d.open=open});syncExp()},
    clrexl:function(){S.lists=S.lists.filter(function(L){L.items=L.items.filter(function(it){return !sampleItem(it)});return !(SAMPLE_LISTS.indexOf(L.id)>=0&&!L.items.length)});save('gs-lists',S.lists);render();toast('Sample lists cleared. Anything you added is still here.')},
    clrexev:function(){S.events=S.events.filter(function(e){return !e.ex});save('gs-events',S.events);render();toast('Example plans cleared.')},
    tab:function(b){S.tab=b.dataset.v;render();window.scrollTo(0,0)},
    part:function(b){S.part=b.dataset.v;S.shift=0;render()},
    done:function(b){S.status[b.dataset.v]='done';render()},
    skip:function(b){var sid=b.dataset.v;if(U().sq){S.sq={id:b.dataset.v,n:0};render();return}S.status[b.dataset.v]='skip';render();toast('Marked as skipped.')},
    sqyes:function(){
      var q=S.sq;if(!q)return;
      if(q.id==='clothes'){S.status[q.id]='skip';S.sq=null;render();toast("It's no fun if EVERY task has friction \ud83d\ude42");return}
      if(q.n>=SQ.length-1){S.sq=null;render();return}
      q.n++;render()
    },
    sqno:function(){S.sq=null;render()},
    sugopt:function(b){
      var kind=b.dataset.k,sc=b.dataset.s,tid=b.dataset.t,name=b.dataset.v,arr=selOf(sc,kind,tid),O=optsOf(kind,tid);
      if(O.indexOf(name)<0){O.push(name);saveOpts(kind,tid)}
      if(arr.indexOf(name)<0)arr.push(name);
      var fid='new-'+sc+'-'+kind+'-'+tid;
      keepAll(render);var nm=document.getElementById(fid);if(nm)nm.focus()
    },
    stepclick:function(b){
      var sid=b.dataset.v;
      var undid=!!S.status[sid];
      if(undid){delete S.status[sid];render()}
      var go=function(){var hero=document.querySelector('.hero');
      if(hero){hero.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'center'});hero.classList.remove('pulse');void hero.offsetWidth;hero.classList.add('pulse');setTimeout(function(){hero.classList.remove('pulse')},1100)}};
      if(undid)setTimeout(go,900);else go();
    },
    forgot:function(){S.fg=true;render()},
    fgok:function(){S.fg=null;logIt('Forgot morning meds',null,false);S.status.dailymeds='skip';render()},
    fgbg:function(b,e){if(e.target===b){S.fg=null;render()}},
    sqbg:function(b,e){if(e.target===b){S.sq=null;render()}},
    recime:function(){toast('Opening a recipe search.')},
    lunch:function(){setTimeout(function(){S.status.lunch='done';render()},300)},
    lunchsolo:function(){S.status.lunch='done';render();toast('Got it. Lunch is on your own today.')},
    rough:function(){S.rp={t:null,sev:null,meds:[]};render()},
    rmig:function(b){var id=b.dataset.v;S.rp.t=S.rp.t===id?null:id;S.rp.sev=null;S.rp.meds=[];keepAll(render)},
    rsev:function(b){keepAll(function(){S.rp.sev=S.rp.sev===b.dataset.v?null:b.dataset.v;render()})},
    rcancel:function(){S.rp=null;render()},
    rbg:function(b,e){if(e.target===b){S.rp=null;render()}},
    rgo:function(){
      logIt('Rough day');
      var rt=S.rp.t&&trkById(S.rp.t);
      if(rt)logIt(rt.name,{trk:rt.id,sev:S.rp.sev,meds:S.rp.meds});
      else if(!S.trk.length){var rn=document.getElementById('rp-name'),rv=rn?rn.value.trim():'';if(rv){var nt=addTrk(rv);logIt(nt.name,{trk:nt.id})}}
      S.rp=null;
      if(creature()){var mt=load('gs-moodtmp',null);save('gs-moodtmp',{prev:(mt&&mt.prev)?mt.prev:(S.mood==='slow'?'balanced':S.mood),day:ymd(new Date())});S.mood='slow';save('gs-mood','slow');bearFirst();S.skipPark=[];S.status={};render();toast('Bear minimum until tomorrow. Logged.');return}
      var tmp=load('gs-lowtmp',null);var prev=(tmp&&tmp.prev)?tmp.prev:(S.logic==='low'?'gentle':S.logic);
      save('gs-lowtmp',{prev:prev,day:ymd(new Date())});S.logic='low';save('gs-logic','low');S.shift=0;S.skipPark=[];applyLook();S.status={};render();toast('Low battery mode is on until tomorrow. Logged.');
    },
    chip:function(b){keepAll(function(){toggleSel(b.dataset.v);render()})},
    stack:function(b){keepAll(function(){
      var id=b.dataset.v;
      if(trkById(id)){var was=S.f.sels.indexOf('trk:'+id)>=0;toggleSel('trk:'+id);if(!was)S.justOpen=id}
      else{var i=S.openStacks.indexOf(id);if(i>=0)S.openStacks.splice(i,1);else{S.openStacks.push(id);S.justOpen=id}}
      render();S.justOpen=null})},
    rtmv:function(b){
      var p=b.dataset.p,a=S.rtn.parts[p],i=a.indexOf(b.dataset.v),d=+b.dataset.d,j=i+d;
      while(j>=0&&j<a.length&&offId(a[j]))j+=d;
      if(i<0||j<0||j>=a.length)return;
      var t=a[i];a[i]=a[j];a[j]=t;saveRtn();keepSheet(render)
    },
    rtedit:function(b){S.se={id:b.dataset.v,name:nmOf(b.dataset.v)};render();var i=document.getElementById('se-name');if(i){i.focus();i.select()}},
    sesave:function(){
      var se=S.se,i=document.getElementById('se-name'),v=(i?i.value:'').trim().slice(0,50);if(!se)return;
      if(!v){toast('A step needs a name.');return}
      var cu=S.cust.filter(function(x){return x.id===se.id})[0];
      if(cu){cu.t=v;delete S.rtn.names[se.id]}
      else if(v===NAMES[se.id])delete S.rtn.names[se.id];else S.rtn.names[se.id]=v;
      syncSteps();saveRtn();S.se=null;render();toast('Saved.')
    },
    itopen:function(b){S.itE={l:+b.dataset.l,i:+b.dataset.i};render();var i=document.getElementById('it-name');if(i){i.focus();i.select()}},
    itsave:function(){var E=S.itE;if(!E)return;var it=S.lists[E.l].items[E.i],i=document.getElementById('it-name'),v=i?i.value.trim().slice(0,120):'';if(!v){toast('An item needs a name.');return}
      it.t=v;if(it.tid){var t=taskById(it.tid);if(t){t.title=v;saveTasks()}}save('gs-lists',S.lists);S.itE=null;keepOpen();toast('Saved.')},
    itpark:function(){var E=S.itE;if(!E)return;S.itE=null;A.lpark({dataset:{l:String(E.l),i:String(E.i)}})},
    itdel:function(){var E=S.itE;if(!E)return;S.itE=null;A.del({dataset:{l:String(E.l),i:String(E.i)}});toast('Deleted.')},
    itcancel:function(){S.itE=null;keepOpen()},
    itbg:function(b,e){if(e.target===b){S.itE=null;keepOpen()}},
    sedel:function(){var se=S.se;if(!se)return;rmStep(se.id);S.se=null;render();toast('Removed from your routine.')},
    rtswdel:function(b){var id=b.dataset.v;keepSheet(function(){rmStep(id);render()});toast('Removed from your routine.')},
    secancel:function(){S.se=null;render()},
    sebg:function(b,e){if(e.target===b){S.se=null;render()}},
    rtback:function(b){var id=b.dataset.v;S.rtn.hidden=S.rtn.hidden.filter(function(x){return x!==id});var p=defPart(id);if(S.rtn.parts[p].indexOf(id)<0)S.rtn.parts[p].push(id);saveRtn();keepSheet(render)},
    renew:function(){S.re=newRe();render()},
    reedit:function(b){var r=S.reps.filter(function(x){return x.id===b.dataset.v})[0];if(!r)return;S.re={mode:r.mode||'dom',nth:r.nth,dow:r.dow,anchor:r.anchor,id:r.id,t:r.t,rep:r.rep,days:r.days.slice(),dom:r.dom||1,part:r.part,as:r.as,time:r.time||'',dur:r.dur||60,err:''};render()},
    retype:function(b){keepSheet(function(){syncRe();S.re.rep=b.dataset.v;render()})},
    reday:function(b){keepSheet(function(){syncRe();var d=+b.dataset.v,i=S.re.days.indexOf(d);if(i>=0)S.re.days.splice(i,1);else S.re.days.push(d);render()})},
    repart:function(b){keepSheet(function(){syncRe();S.re.part=b.dataset.v;render()})},
    rptmode:function(b){keepSheet(function(){var r=rptObj(b.dataset.k);if(!r)return;rptSyncAll(b.dataset.k);r.mode=b.dataset.v;var n=new Date();if(r.mode==='nth'&&!r.nth){r.nth=Math.ceil(n.getDate()/7);if(r.nth>4)r.nth=5;r.dow=n.getDay()}render()})},
    rptnth:function(b){keepSheet(function(){var r=rptObj(b.dataset.k);if(!r)return;rptSyncAll(b.dataset.k);r.nth=+b.dataset.v;if(r.dow===undefined)r.dow=new Date().getDay();render()})},
    rptdow:function(b){keepSheet(function(){var r=rptObj(b.dataset.k);if(!r)return;rptSyncAll(b.dataset.k);r.dow=+b.dataset.v;if(!r.nth)r.nth=1;render()})},
    tkg:function(b){keepSheet(function(){syncTk();S.tk.g=b.dataset.v;render()})},
    rpt:function(b){keepSheet(function(){var r=rptObj(b.dataset.k);if(!r)return;rptSyncAll(b.dataset.k);r.rep=b.dataset.v;if(b.dataset.v==='w'&&!r.days.length)r.days=[new Date().getDay()];if(b.dataset.v==='m'&&!r.domSet){r.dom=new Date().getDate();r.domSet=true}render()})},
    rptday:function(b){keepSheet(function(){var r=rptObj(b.dataset.k);if(!r)return;rptSyncAll(b.dataset.k);var a=r.days,i=a.indexOf(+b.dataset.v);if(i>=0)a.splice(i,1);else a.push(+b.dataset.v);render()})},
    redur:function(b){keepSheet(function(){syncRe();S.re.dur=+b.dataset.v;render()})},
    reas:function(b){
      if(b.dataset.v==='ev'){syncRe();var R=S.re,E=newEv();E.title=R.t||'';E.rpt=rptCopy(R);if(R.rep==='w'&&!E.rpt.days.length)E.rpt.days=[new Date().getDay()];
        if(R.id){S.reps=S.reps.filter(function(x){return x.id!==R.id});saveRtn()}
        S.re=null;S.ev=E;render();toast('Events are plans that repeat, so here is the plan editor.');return}
      keepSheet(function(){syncRe();S.re.as=b.dataset.v;render()})},
    resave:function(){
      syncRe();var R=S.re;R.err='';
      if(!R.t.trim())R.err='Give it a name first.';
      else if(R.rep==='w'&&!R.days.length)R.err='Pick at least one day.';
      else if(R.as==='ev'&&!R.time)R.err='Add a start time so it lands in the right spot.';
      if(R.err){errAt(!R.t.trim()?'#re-t':R.rep==='w'&&!R.days.length?'[aria-label="Days"]':'#re-time');return}
      var rec={mode:R.mode||'dom',nth:R.nth,dow:R.dow,anchor:R.anchor||ymd(new Date()),id:R.id||('p'+Date.now()),t:R.t.trim().slice(0,50),rep:R.rep,days:R.days.slice(),dom:R.dom,part:R.part,as:R.as,time:R.as==='ev'?R.time:undefined,dur:R.as==='ev'?R.dur:undefined};
      var ix=-1;S.reps.forEach(function(x,i){if(x.id===rec.id)ix=i});
      if(ix>=0)S.reps[ix]=rec;else S.reps.push(rec);
      syncSteps();genReps();saveRtn();S.re=null;render();toast('Saved. It comes back on its own, never overdue.')
    },
    redel:function(){var id=S.re&&S.re.id;S.reps=S.reps.filter(function(x){return x.id!==id});saveRtn();S.re=null;render();toast('Removed.')},
    recancel:function(){S.re=null;render()},
    rebg:function(b,e){if(e.target===b){S.re=null;render()}},
    flrtog:function(b){keepSheet(function(){var id=b.dataset.v,i=S.floorIds.indexOf(id);if(i>=0)S.floorIds.splice(i,1);else S.floorIds.push(id);save('gs-floor',S.floorIds);render()})},
    catmode:function(){S.catEdit=!S.catEdit;keepAll(render)},
    catedit:function(b){S.ce={label:b.dataset.v,name:b.dataset.v};render();var i=document.getElementById('ce-name');if(i){i.focus();i.select()}},
    cesave:function(){
      var ce=S.ce,i=document.getElementById('ce-name'),v=(i?i.value:'').trim().slice(0,40);if(!ce)return;
      if(!v){toast('A category needs a name.');return}
      if(v!==ce.label){
        if(S.cats.concat(trkNames()).some(function(x){return x.toLowerCase()===v.toLowerCase()&&x!==ce.label})){toast('That name is already a category.');return}
        var ix=S.cats.indexOf(ce.label);if(ix>=0)S.cats[ix]=v;
        S.stacks.forEach(function(x){var k=x.kids.indexOf(ce.label);if(k>=0)x.kids[k]=v});
        var s=S.f.sels.indexOf(ce.label);if(s>=0)S.f.sels[s]=v;
        S.log.forEach(function(e){if(e.label===ce.label)e.label=v});
        if(S.colors[ce.label]!==undefined){S.colors[v]=S.colors[ce.label];delete S.colors[ce.label];save('gs-colors',S.colors)}
        save('gs-cats',S.cats);save('gs-stacks',S.stacks);save('gs-log',S.log);
      }
      S.ce=null;render();toast('Saved.')
    },
    cedel:function(){
      var ce=S.ce;if(!ce)return;
      S.cats=S.cats.filter(function(x){return x!==ce.label});
      S.f.sels=S.f.sels.filter(function(x){return x!==ce.label});
      cleanStacks();save('gs-cats',S.cats);save('gs-stacks',S.stacks);
      S.ce=null;render();toast('Taken away. Past entries are still in your log.')
    },
    cecancel:function(){S.ce=null;render()},
    cebg:function(b,e){if(e.target===b){S.ce=null;render()}},
    rename:function(b){var st=stackById(b.dataset.v);if(!st)return;S.ns={id:st.id,name:st.name};render();focusName()},
    namestack:function(){
      var st=S.ns&&stackById(S.ns.id),el=document.getElementById('stackname');
      if(st&&el&&el.value.trim())st.name=el.value.trim().slice(0,24);
      S.ns=null;save('gs-stacks',S.stacks);render();
    },
    unstack:function(b){
      var st=stackById(b.dataset.v);if(!st)return;
      if(!st.builtin)S.stacks=S.stacks.filter(function(x){return x.id!==st.id});else st.kids=[];
      S.ns=null;cleanStacks();save('gs-stacks',S.stacks);render();toast('Ungrouped. The tiles are back on their own.');
    },
    nbg:function(b,e){if(e.target===b){S.ns=null;save('gs-stacks',S.stacks);render()}},
    ncancel:function(){S.ns=null;render()},
    evnew:function(){S.ev=newEv();render()},
    evpaste:function(){
      var E=S.ev;if(!E)return;syncEv();
      function box(msg){E.pasteOpen=true;E.pasteMsg=msg;keepSheet(render);var t=document.getElementById('ev-pastetxt');if(t)t.focus()}
      if(!(navigator.clipboard&&navigator.clipboard.readText)){box('Paste the message into the box below.');return}
      navigator.clipboard.readText().then(function(t){if(t&&t.trim()){fillFromText(t);keepSheet(render)}else box('Nothing is copied yet. Copy the message first, or paste it into the box below.')}).catch(function(){box('The app could not read what you copied. Paste it into the box below instead.')});
    },
    evparse:function(){var t=document.getElementById('ev-pastetxt'),v=t?t.value.trim():'';if(!v){toast('Paste the message in first.');return}syncEv();fillFromText(v);keepSheet(render)},
    evnewp:function(){S.ev=newEv();S.ev.by='p';render()},
    evedit:function(b){
      if(b.dataset.v.indexOf('rv_')===0){A.reedit({dataset:{v:b.dataset.v.slice(3)}});return}
      var bid=b.dataset.v.split('|')[0],occ=b.dataset.v.split('|')[1]||'';
      var ev=S.events.filter(function(x){return x.id===bid})[0];if(!ev)return;
      var k=occ||evDate(ev),dk=k===ymd(new Date())?'today':k===ymd(addDays(new Date(),1))?'tomorrow':'other';
      S.ev={occ:occ,series:!!ev.rpt,rpt:ev.rpt?rptCopy(ev.rpt):rptNew(),tags:(ev.tags||[]).slice(),id:ev.id,by:ev.by||'me',title:ev.title,dk:dk,dateVal:k,time:ev.time,dur:ev.dur||0,place:ev.place||'',travel:ev.travel||0,prep:ev.prep||'',withJ:!!ev.withJ,share:ev.share||'full',err:''};
      render();
    },
    evclose:function(){S.ev=null;render()},
    evbg:function(b,e){if(e.target===b){S.ev=null;render()}},
    evquick:function(b){keepSheet(function(){syncEv();var t=S.ev.tags=S.ev.tags||[],i=t.indexOf(b.dataset.v);if(i>=0)t.splice(i,1);else t.push(b.dataset.v);render()})},
    evday:function(b){keepSheet(function(){syncEv();S.ev.dk=b.dataset.v;render()})},
    evdur:function(b){keepSheet(function(){syncEv();if(b.dataset.v==='other'){S.ev.durOther=true;if(!S.ev.dur)S.ev.dur=180}else{S.ev.durOther=false;S.ev.dur=+b.dataset.v}render();if(S.ev.durOther){var x=document.getElementById('ev-durh');if(x)x.focus()}})},
    evtravel:function(b){keepSheet(function(){syncEv();if(b.dataset.v==='other'){S.ev.trOther=true;if(!S.ev.travel)S.ev.travel=60}else{S.ev.trOther=false;S.ev.travel=+b.dataset.v}render();if(S.ev.trOther){var x=document.getElementById('ev-trh');if(x)x.focus()}})},
    evby:function(b){keepSheet(function(){syncEv();S.ev.by=b.dataset.v;render()})},
    evwj:function(){keepSheet(function(){syncEv();S.ev.withJ=!S.ev.withJ;render()})},
    evshare:function(b){keepSheet(function(){syncEv();S.ev.share=b.dataset.v;render()})},
    evsave:function(){
      syncEv();var E=S.ev;E.err='';
      if(!E.title.trim()&&(E.tags||[]).length)E.title=E.tags[0];
      if(!E.title.trim())E.err='Give it a name first. A word or two is plenty.';
      else if(!E.time)E.err='Add a start time so it lands in the right spot.';
      else if(E.dk==='other'&&!E.dateVal)E.err='Pick the day.';
      else if(E.rpt&&E.rpt.rep==='w'&&!E.rpt.days.length)E.err='Pick which days it repeats.';
      if(E.err){errAt(!E.title.trim()?'#ev-title':!E.time?'#ev-time':(E.dk==='other'&&!E.dateVal)?'#ev-date':'[aria-label="Days"]');return}
      var date=E.dk==='today'?ymd(new Date()):E.dk==='tomorrow'?ymd(addDays(new Date(),1)):E.dateVal;
      if(E.id&&E.series&&!E.scope){E.ask='save';keepSheet(render);var _a=document.querySelector('.askseries');if(_a)_a.scrollIntoView({block:'center'});return}
      var base=E.id?S.events.filter(function(x){return x.id===E.id})[0]:null;
      if(E.scope==='one'&&base&&E.occ){base.skip=(base.skip||[]).concat([E.occ]);E.id=null;E.rpt=rptNew()}
      else if(E.scope==='all'&&base)date=base.date;
      var rec={id:E.id||('e'+Date.now()),title:E.title.trim(),date:date,time:E.time,dur:E.dur,place:E.place.trim(),travel:E.travel,prep:E.prep.trim(),withJ:E.withJ,share:E.share,tags:(E.tags||[]).slice(),rpt:(E.rpt&&E.rpt.rep!=='none')?(function(){var x=rptCopy(E.rpt);x.anchor=date;return x})():undefined,by:E.by==='p'?'p':undefined};
      if(base&&E.id&&base.skip)rec.skip=base.skip;var idx=-1;S.events.forEach(function(x,i){if(x.id===rec.id)idx=i});
      if(idx>=0)S.events[idx]=rec;else S.events.push(rec);
      save('gs-events',S.events);S.ev=null;render();toast(E.by==='p'?'Saved. It is on the schedule so you can plan around it.':'Saved. §P sees it the way you set it.');
    },
    evdel:function(){
      var E=S.ev;if(E&&E.series&&!E.scope){E.ask='del';keepSheet(render);var _a=document.querySelector('.askseries');if(_a)_a.scrollIntoView({block:'center'});return}
      var id=E&&E.id;
      if(E&&E.scope==='one'&&E.occ){var bs=S.events.filter(function(x){return x.id===id})[0];if(bs)bs.skip=(bs.skip||[]).concat([E.occ]);save('gs-events',S.events);S.ev=null;render();toast('Removed just that one.');return}
      S.events=S.events.filter(function(x){return x.id!==id});
      save('gs-events',S.events);S.ev=null;render();toast('Removed. Nothing else changes.');
    },
    tkscope:function(b){var T=S.tk;if(!T)return;var v=b.dataset.v;if(v==='cancel'){T.ask=null;keepSheet(render);return}var what=T.ask;T.ask=null;T.scope=v;syncTk();if(what==='del')A.tkdel();else A.tksave()},
    evscope:function(b){var E=S.ev;if(!E)return;var v=b.dataset.v;if(v==='cancel'){E.ask=null;keepSheet(render);return}var what=E.ask;E.ask=null;E.scope=v;syncEv();if(what==='del')A.evdel();else A.evsave()},
    evready:function(b){S.evReady[b.dataset.v]=true;render();toast('Good. You are all set.')},
    evhide:function(b){S.evHide[b.dataset.v]=true;render()},
    sev:function(b){keepAll(function(){var t=tdOf(b.dataset.t);t.sev=t.sev===b.dataset.v?null:b.dataset.v;render()})},
    togopt:function(b){
      var arr=selOf(b.dataset.s,b.dataset.k,b.dataset.t),n=b.dataset.v,i=arr.indexOf(n);
      keepAll(function(){if(i>=0)arr.splice(i,1);else arr.push(n);render()});
    },
    savelog:function(){
      var c=document.getElementById('custom');
      var custom=c?c.value.trim():'';
      if(!S.f.sels.length&&!custom){toast('Pick something or type it. Or just leave it.');return}
      var firstT=null;
      S.f.sels.forEach(function(l){
        if(l.indexOf('trk:')===0){var t=trkById(l.slice(4));if(!t)return;if(!firstT)firstT=t;var d=tdOf(t.id);logIt(t.name,{trk:t.id,sev:d.sev,meds:d.meds,trig:d.trig,symp:d.symp},true)}
        else logIt(l,null,true)});
      if(custom){
        logIt(custom,null,true);
        var all=S.cats.concat(trkNames()).map(function(x){return x.toLowerCase()});
        if(all.indexOf(custom.toLowerCase())<0){S.cats.push(custom);save('gs-cats',S.cats)}
      }
      resetForm();render();toast(firstT?'Saved. '+firstT.name+' entries have their own view below.':'Saved.')
    },
    lv:function(b){S.lv=b.dataset.v;S.day=null;render()},
    day:function(b){keepAll(function(){S.day=S.day===b.dataset.k?null:b.dataset.k;render()})},
    clearday:function(){S.day=null;render()},
    tog:function(b){S.hide[b.dataset.v]=!S.hide[b.dataset.v];render()},
    dellog:function(b){S.log.splice(+b.dataset.i,1);save('gs-log',S.log);render()},
    prevmo:function(){S.mo-=1;S.day=null;render()},
    nextmo:function(){if(S.mo<0){S.mo+=1;S.day=null;render()}},
    lmode:function(){S.lmode=S.lmode===true?false:true;render()},
    lmodeoff:function(){S.lmode=false;keepOpen()},
    ledit:function(b){var L=S.lists[+b.dataset.l];if(!L)return;S.lmode=L.id;render();var d=document.querySelector('details.lcard[data-id="'+L.id+'"]');if(d){d.open=true;d.scrollIntoView({block:'start',behavior:'smooth'});var t=d.querySelector('.ltitle');if(t)try{t.focus({preventScroll:true})}catch(x){}}},
    ldellist:function(b){var L=S.lists[+b.dataset.l];if(!L)return;if(L.items.length&&!confirm('Delete "'+L.name+'" and its '+L.items.length+' item'+(L.items.length===1?'':'s')+'?'))return;S.lists.splice(+b.dataset.l,1);save('gs-lists',S.lists);render()},
    tick:function(b){var it=S.lists[+b.dataset.l].items[+b.dataset.i];it.done=!it.done;save('gs-lists',S.lists);keepOpen()},
    ustext:function(){sendOut(usText(),null,'Copied. Paste it anywhere.')},
    uslink:function(){sendOut('',usLink(),'Link copied.')},
    lpark:function(b){var L=S.lists[+b.dataset.l],it=L.items[+b.dataset.i];if(!it)return;
      if(it.parked){S.tasks=S.tasks.filter(function(t){return t.id!==it.tid||t.done});it.parked=false;it.tid=null;saveTasks();save('gs-lists',S.lists);toast('Taken back out of '+lotThe()+'.');keepOpen();return}
      var id='t'+Date.now();S.tasks.unshift({id:id,title:itTxt(it),h:'week',nr:false,fun:false,work:[],mins:0,w:'med',due:'',steps:[],done:false,created:Date.now()});it.parked=true;it.tid=id;saveTasks();save('gs-lists',S.lists);toast(creature()?'Stashed away.':'Parked in the parking lot.');keepOpen()},
    del:function(b){S.lists[+b.dataset.l].items.splice(+b.dataset.i,1);save('gs-lists',S.lists);keepOpen()}
  };

  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-a]');if(!b||b.tagName==='FORM')return;
    var f=A[b.dataset.a];if(f)f(b,e);
  });
  document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target&&e.target.matches&&e.target.matches('li[data-a="stepclick"]')){e.preventDefault();e.target.click()}});
  document.addEventListener('input',function(e){
    if(e.target&&e.target.id==='plsearch'){S.pq=e.target.value;var pr=document.getElementById('plresults');if(pr)pr.innerHTML=fx(plBody());return}
    var t=e.target;if(!t||t.id!=='simslider')return;
    var v=+t.value,np=v<720+S.dayOff?'morning':v<1020+S.dayOff?'afternoon':'evening';
    if(np!==S.part){S.part=np;S.shift=0}
    SIM.morning=SIM.afternoon=SIM.evening=v;
    var lb=document.getElementById('simlbl'),pt=document.getElementById('simpart');
    if(lb)lb.textContent=fmt(v);if(pt)pt.textContent=' ('+PARTS[np].label.toLowerCase()+')';
    t.setAttribute('aria-valuetext',fmt(v));
    if(!S.simDrag)render();
  });
  function simEnd(){if(S.simDrag){S.simDrag=false;render()}}
  document.addEventListener('pointerdown',function(e){if(e.target&&e.target.id==='simslider')S.simDrag=true});
  document.addEventListener('pointerup',simEnd);document.addEventListener('pointercancel',simEnd);
  (function(){
    var T=null;
    function clear(){if(T){clearTimeout(T.id);if(T.btn)T.btn.classList.remove('hold');T=null}}
    document.addEventListener('pointerdown',function(e){
      var b=e.target.closest&&e.target.closest('.lotadd button[type=submit]');if(!b)return;
      clear();b.classList.add('hold');
      var f=b.closest('form');if(f&&f.dataset.a!=='tkquick'){b.classList.remove('hold');return}
      T={btn:b,id:setTimeout(function(){
        var inp=f.querySelector('input'),title=inp?inp.value.trim():'',h=f.dataset.h||'week';
        T=null;S.lpFired=true;setTimeout(function(){S.lpFired=false},600);
        S.tk={g:f.dataset.g||'',rpt:rptNew(),repId:null,id:null,title:title,h:h,nr:false,fun:false,bd:false,work:[],mins:0,w:'med',due:'',steps:[],newStep:'',err:''};
        render();
      },600)};
    });
    ['pointerup','pointercancel','pointerleave'].forEach(function(n){document.addEventListener(n,function(e){if(T&&(n!=='pointerleave'||(e.target.closest&&e.target.closest('.lotadd button'))))clear()},true)});
    document.addEventListener('contextmenu',function(e){if(e.target.closest&&e.target.closest('.lotadd button[type=submit]'))e.preventDefault()});
  })();
  document.addEventListener('mousedown',function(e){if(e.target.closest&&e.target.closest('.medsugg button'))e.preventDefault()});
  document.addEventListener('toggle',function(e){var t=e.target;if(t&&t.dataset&&t.dataset.f)S.filt=t.open},true);
  document.addEventListener('submit',function(e){
    var f=e.target.closest('form[data-a]');if(!f)return;e.preventDefault();
    var inp=f.querySelector('input'),v=inp.value.trim();if(!v)return;
    var ids=openIds();
    if(f.dataset.a==='addopt'){
      var kind=f.dataset.k,sc=f.dataset.s,tid=f.dataset.t,arr=selOf(sc,kind,tid),name=v,O=optsOf(kind,tid);
      var hit=O.filter(function(x){return x.toLowerCase()===v.toLowerCase()})[0];
      if(hit)name=hit;else{O.push(v);saveOpts(kind,tid)}
      if(arr.indexOf(name)<0)arr.push(name);
      var fid='new-'+sc+'-'+kind+'-'+tid;
      keepAll(function(){document.getElementById(fid).value='';render()});
      var nm=document.getElementById(fid);if(nm){nm.value='';nm.focus()}
    }else if(f.dataset.a==='additem'){
      var L=S.lists[+f.dataset.l];L.items.push({t:v,done:false});save('gs-lists',S.lists);render();reopen(ids);
      var el=document.getElementById('add-'+L.id);if(el)el.focus();
    }else if(f.dataset.a==='rtadd'){
      var rp=f.dataset.p,rid='c'+Date.now();
      S.cust.push({id:rid,t:v.slice(0,50)});S.rtn.parts[rp].push(rid);syncSteps();saveRtn();
      S.rtAdd=null;keepSheet(render);
    }else if(f.dataset.a==='acemail'){
      if(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){window.GSSync&&window.GSSync.emailLink(v)}else toast('That email does not look right.');
    }else if(f.dataset.a==='lgadd'){
      if(S.groups.length<20&&!S.groups.some(function(g){return g.name.toLowerCase()===v.toLowerCase()})){S.groups.push({id:'g'+Date.now(),name:v.slice(0,24)});save('gs-groups',S.groups)}
      render();var gn=document.getElementById('lgnew');if(gn)gn.focus();
    }else if(f.dataset.a==='ytsave'){
      if(/^https:\/\/(www\.|m\.|music\.)?(youtube\.com|youtu\.be)\//i.test(v)){S.ytl=v;save('gs-ytl',v);keepSheet(render);toast('Saved.')}else toast('Paste a youtube.com link, starting with https://')
    }else if(f.dataset.a==='evtagadd'){
      if(S.evtags.length<16&&S.evtags.indexOf(v)<0){S.evtags.push(v.slice(0,24));save('gs-evtags',S.evtags)}
      keepSheet(render);var en=document.getElementById('evtagnew');if(en)en.focus();
    }else if(f.dataset.a==='careadd'){
      S.care.push(v);save('gs-care',S.care);S.careIdx=careList().length-1;render();toast('Added.');
    }else if(f.dataset.a==='tkquick'){
      if(S.lpFired)return;
      S.tasks.unshift({g:f.dataset.g||undefined,id:'t'+Date.now(),title:v,h:f.dataset.h||'week',dayOf:f.dataset.h==='day'?ymd(new Date()):undefined,nr:false,fun:false,work:[],mins:0,w:'med',due:'',steps:[],done:false,created:Date.now()});saveTasks();render();
      var q=document.getElementById('tkq');if(q)q.focus();toast(U().parked+'. It can wait there.');
    }else if(f.dataset.a==='newlist'){
      S.lists.push({id:'l'+Date.now(),name:v,items:[]});save('gs-lists',S.lists);render();reopen(ids);
      var all=document.querySelectorAll('details.lcard');if(all.length)all[all.length-1].open=true;
    }
  });

  /* ---- long-press, then drag a tile onto another tile (new stack) or onto a stack (move in) ---- */
  var D=null,noClick=0;
  function moveGhost(x,y){if(D&&D.active&&D.el){D.el.style.left=(x-D.ox)+'px';D.el.style.top=(y-D.oy)+'px'}}
  function setHot(t){if(D.hot&&D.hot!==t)D.hot.classList.remove('drop-hot');D.hot=t;if(t)t.classList.add('drop-hot')}
  function hitAt(x,y){
    var el=document.elementFromPoint(x,y);if(!el)return null;
    var t=el.closest('[data-drop-out],[data-drop-stack],[data-drop-tile]');if(!t)return null;
    if(t.hasAttribute('data-drop-out'))return D.from?t:null;
    if(t.hasAttribute('data-drop-stack'))return t.dataset.dropStack===D.from?null:t;
    return t.dataset.dropTile===D.label?null:t;
  }
  function startDrag(){
    if(!D||D.active)return;
    D.active=true;
    var el=D.el,r=el.getBoundingClientRect(),cs=getComputedStyle(el);
    D.ox=D.x-r.left;D.oy=D.y-r.top;D.oldStyle=el.getAttribute('style');
    var ph=document.createElement('span');ph.setAttribute('aria-hidden','true');
    ph.style.cssText='display:inline-block;flex:none;width:'+r.width+'px;height:'+r.height+'px;margin:'+cs.margin;
    el.parentNode.insertBefore(ph,el);D.ph=ph;
    el.classList.add('dragging');
    el.style.cssText=(D.oldStyle||'')+';position:fixed;left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px;margin:0;z-index:60;pointer-events:none';
    moveGhost(D.x,D.y);
    if(D.from)document.getElementById('outzone').hidden=false;
    try{var sel=window.getSelection();if(sel)sel.removeAllRanges()}catch(e){}
    try{if(navigator.vibrate)navigator.vibrate(12)}catch(e){}
    D.scroller=setInterval(function(){if(!D)return;var y=D.y;if(y<90)window.scrollBy(0,-12);else if(y>window.innerHeight-130)window.scrollBy(0,12)},16);
  }
  function endDrag(commit){
    if(!D)return;
    var d=D;D=null;clearTimeout(d.timer);clearInterval(d.scroller);
    if(!d.active)return;
    noClick=Date.now()+450;
    d.el.classList.remove('dragging');
    if(d.oldStyle===null||d.oldStyle===undefined)d.el.removeAttribute('style');else d.el.setAttribute('style',d.oldStyle);
    if(d.ph&&d.ph.parentNode)d.ph.parentNode.removeChild(d.ph);
    if(d.hot)d.hot.classList.remove('drop-hot');
    var oz=document.getElementById('outzone');oz.hidden=true;oz.classList.remove('drop-hot');
    if(commit&&d.hot)applyDrop(d,d.hot);
  }
  function applyDrop(d,t){
    var label=d.label,msg='';
    if(t.hasAttribute('data-drop-out')){
      removeKid(label);msg='Out of the stack.';
    }else if(t.hasAttribute('data-drop-stack')){
      var st=stackById(t.dataset.dropStack);if(!st)return;
      removeKid(label);st.kids.push(label);
      if(!trkById(st.id)&&S.openStacks.indexOf(st.id)<0)S.openStacks.push(st.id);
      msg='Moved into '+st.name+'.';
    }else{
      var other=t.dataset.dropTile,id='s'+Date.now();
      removeKid(label);
      S.stacks.push({id:id,name:'New stack',kids:[other,label]});
      S.openStacks.push(id);S.ns={id:id,name:'New stack'};
    }
    cleanStacks();save('gs-stacks',S.stacks);
    keepAll(render);
    if(S.ns)focusName();else toast(msg);
  }
  document.addEventListener('pointerdown',function(e){
    if(D)return;
    var t=e.target.closest&&e.target.closest('[data-drag]');if(!t)return;
    if(e.pointerType==='mouse'&&e.button!==0)return;
    D={el:t,label:t.dataset.drag,from:t.dataset.from||'',sx:e.clientX,sy:e.clientY,x:e.clientX,y:e.clientY,id:e.pointerId,type:e.pointerType,active:false,hot:null,ghost:null};
    D.timer=setTimeout(startDrag,450);
  });
  document.addEventListener('pointermove',function(e){
    if(!D||e.pointerId!==D.id)return;
    D.x=e.clientX;D.y=e.clientY;
    if(!D.active){
      var dist=Math.hypot(D.x-D.sx,D.y-D.sy);
      if(D.type==='mouse'){if(dist>6)startDrag()}
      else if(dist>10){clearTimeout(D.timer);D=null}
      return;
    }
    e.preventDefault();
    moveGhost(D.x,D.y);
    var t=hitAt(D.x,D.y);setHot(t);
  });
  document.addEventListener('pointerup',function(e){if(D&&e.pointerId===D.id)endDrag(true)});
  document.addEventListener('pointercancel',function(e){if(D&&e.pointerId===D.id)endDrag(false)});
  document.addEventListener('touchmove',function(e){if(D&&D.active&&e.cancelable)e.preventDefault()},{passive:false});
  document.addEventListener('contextmenu',function(e){if(e.target.closest&&e.target.closest('[data-drag]'))e.preventDefault()});
  document.addEventListener('click',function(e){if(Date.now()<noClick){e.stopPropagation();e.preventDefault()}},true);
  /* long press on a plan, list item or routine step opens its editor */
  (function(){
    var L=null,eat=0;
    document.addEventListener('click',function(e){if(eat){var on=Date.now()<eat;eat=0;if(on){e.stopPropagation();e.preventDefault()}}},true);
    function clear(){if(L){clearTimeout(L.t);if(L.el)L.el.classList.remove('lping');L=null}}
    document.addEventListener('pointerdown',function(e){
      eat=0;clear();var el=e.target.closest&&e.target.closest('[data-lp]');if(!el||e.button>0)return;
      if(e.target.closest('input,textarea,select,.grip,.swdel,.lpk,.check,.fpill'))return;
      L={el:el,x:e.clientX,y:e.clientY,id:e.pointerId,t:setTimeout(function(){
        if(!L)return;var a=A[el.dataset.lp];var d=L;clear();if(!a||!document.body.contains(d.el))return;
        eat=Date.now()+1500;try{navigator.vibrate&&navigator.vibrate(12)}catch(x){}
        a(d.el,e);
      },480)};
      el.classList.add('lping');
    });
    document.addEventListener('pointermove',function(e){if(L&&e.pointerId===L.id&&(Math.abs(e.clientX-L.x)>9||Math.abs(e.clientY-L.y)>9))clear()});
    ['pointerup','pointercancel','scroll'].forEach(function(n){document.addEventListener(n,function(){clear()},true)});
    document.addEventListener('contextmenu',function(e){if(e.target.closest&&e.target.closest('[data-lp]'))e.preventDefault()});
  })();
  document.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target&&e.target.id==='stackname'){e.preventDefault();A.namestack()}});

  /* ---- the "Stuck?" helper: a back-and-forth chat answered by Claude ---- */
  var CHATCTL=null,CHATICON='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>';
  var STARTERS=["I can't get out of bed","I don't know what to do first","I can't start something","I'm stuck on a decision","A question about the app"];
  function getSample(){try{return window.claude&&window.claude.use?window.claude.use('sample').then(function(f){return f||null},function(){return null}):Promise.resolve(null)}catch(e){return Promise.resolve(null)}}
  function fab(){if(!PROF||S.menu||S.rp||S.ev||S.ns||S.tk||S.lot||S.pl||S.chat.open)return '';return '<button class="fab" data-a="stuck" aria-label="Open the stuck helper">'+CHATICON+'<span>'+esc(U().stuck)+'</span></button>'}
  /* guided mode (no Claude needed): tap what is going on, get a short, gentle reply and a way in */
  var HELP={
    "I can't get out of bed":{q:"Oh no. What is getting in the way?",o:{
      "Just really cozy":{a:"Then let's take the cozy with you. A sweater, slippers and something warm to drink can all come along. First move: sit up and put your feet on the floor. That is the whole job for now.",act:[]},
      "Wiped out":{a:"Then the goal is not to get going, just to get one small thing started. Sit up, sip some water, and see how you feel after. If today needs a gentler morning, there is a page for that.",act:['rough']},
      "Dreading the day":{a:"That makes sense. The first step does not have to touch the dread. Feet down, water, bathroom, nothing else. We can look at the day once you are up.",act:['rough']},
      "Not sure":{a:"That is okay. Try the smallest version: sit up and take one slow breath. After that you can decide again, and it only has to be the very next thing.",act:[]}}},
    "I don't know what to do first":{a:"Then let's skip deciding. Chance can pick from the things that fit the time you have, and anything it lands on is a fine place to start.",act:['pl']},
    "I can't start something":{q:"What does it feel like?",o:{
      "It feels huge":{a:"Make it smaller than feels reasonable. Open it, then stop. Ten seconds with it counts as starting, and you are allowed to stop after that.",act:[]},
      "I don't know the first step":{a:"Then the first step is finding the first step. Write one line about what done looks like, then name the very first thing your hands would do, like opening the file or finding the form.",act:[]},
      "I'm avoiding it":{a:"Avoiding usually means something about it feels boring, uncomfortable or fuzzy. Boring gets music or company, uncomfortable gets a two-minute timer, fuzzy gets one line about what done looks like. Which one sounds closest?",act:[]},
      "It's boring":{a:"Then pair it with something that is not boring: music, a warm drink, or someone nearby doing their own thing in the same room. Start with just five minutes.",act:[]}}},
    "I'm stuck on a decision":{a:"You do not have to decide. Let chance choose, and if the result makes you wince or relax, that tells you something too.",act:['pl']},
    "A question about the app":{q:"Happy to help. What would you like to know about?",o:{
      "The parking lot":{a:"The parking lot holds anything with no set time: things you mean to do this week or this month. Home suggests one when it fits the time you have, and anything with a real date comes up sooner as that date gets close. Tap Park it to add something, or hold the button to fill in details first. Groups let you keep errands, house jobs and so on in their own little lots.",act:[]},
      "My routine":{a:"Your routine is the steps for each part of the day. Change it in the menu under Settings, Routine: rename steps, drag the grab bar to reorder, hide what you do not need, or add your own. Mark the steps that matter most with Anchor it, and low battery mode shows only those.",act:[]},
      "Plans and repeats":{a:"Plans are things at a set time, like an appointment or dinner out. Add one with + Add on Home or the Plans tab. A plan can repeat weekly or monthly, and tasks in the parking lot can repeat too. If you change or delete a repeating one, it asks whether you mean just that day or every time.",act:[]},
      "Modes and moods":{a:"In the menu under Logic you can change how the app thinks: Gentle is the default, On the clock adds times and a day planner, Tiny steps shrinks everything to its first thirty seconds, and Low battery shows only the essentials. A rough day switches you to low battery until tomorrow.",act:[]},
      "Sharing with someone":{a:"The Us tab shows what your partner sees of your day. Each plan can show full details, just Appointment, or stay private. Once you are signed in you can send a live schedule link that updates by itself, and a daily card can open Messages with your plans for the day.",act:[]},
      "Syncing my devices":{a:"Sign in from the menu under Settings, Account, using Google or an email link, then sign in on your other devices. Everything syncs within a few seconds. Without signing in, everything stays on this device, and you can always save a backup file.",act:[]},
      "The Log":{a:"The Log is an optional, quick way to note things like a rough day, a medication or watering the plants. If you track something health-related, like migraines or flares, it gets its own tile and its own view, and one tap is a whole entry. Tap what happened and it is saved for that day. Look back by month whenever you like. Nothing is ever required.",act:[]},
      "Show me around":{a:"Happy to. The tour opens a practice copy of the app with examples in it, so you can tap anything. When you finish, everything of yours comes back exactly as it was.",act:['tour']},
      "Themes and looks":{a:"Open the menu with the button at the top right. Themes changes the whole look, Colorway changes the colors, and Appearance switches between light and dark. Woodland creatures, under Premium Themes, is a storybook look with moods and seasons.",act:[]}}}
  };
  function helpPick(l){
    var c=S.chat,node=(c.opts&&c.opts[l])||HELP[l];if(!node)return;
    if(c.wait)return;
    c.msgs.push({r:'u',t:l,fresh:1});c.wait=true;chatRender();
    var reply=node.q||node.a,ms=650+Math.min(reply.length*11,950);
    setTimeout(function(){
      if(S.chat!==c||!c.wait)return;
      c.wait=false;
      c.msgs.push({r:'a',t:reply,fresh:1});
      c.appq=!node.q&&!!HELP['A question about the app'].o[l];
      if(node.q){c.opts=node.o;c.act=[]}else{c.opts=null;c.act=node.act||[]}
      if(c.open)chatRender()
    },ms);
  }
  function chatRules(){
    var tk=ymd(new Date()),evs=evsOn(tk).map(function(ev){return ev.title+' at '+fmt(tmin(ev.time))}).join('; ')||'none',nx=nextId(),L=LOGICS[S.logic],pk=S.tasks.filter(function(t){return !t.done}).slice(0,6).map(function(t){return t.title}).join('; ')||'none';
    return fxt(['You are the "Stuck?" helper inside §N\'s personal scheduling app. §N has trouble with task initiation and often ruminates over which task to do first, or cannot start something she knows she should do. Generic productivity advice and "be more disciplined" do not help her; understanding what is in the way and reducing friction does.',
      'How to reply: warm, gentle and curious. Keep it short, usually 2 to 4 sentences, in plain text with no lists, headings or markdown. Ask ONE question at a time about what is getting in the way before you advise. Once you understand the barrier, offer one tiny, concrete first action, and if it fits, a way to make it cozier or easier. Never guilt, never "should", never mention overdue items or streaks, no lectures, no heavy reassurance, no diagnosing.',
      'Tone example (not a script): if she says "I\'m struggling to get out of bed", you might reply "Oh no! What\'s getting in the way? Just really cozy, or something else?" and if she says "so cozy", "Let\'s take the cozy with you. A sweater, a cup of tea and slippers can help."',
      'If she cannot choose between tasks, help narrow it to one: ask what is most time-sensitive or what is weighing on her, then pick one for her, say why in a sentence, and name the first two-minute action.',
      'If she says anything suggesting she may hurt herself or is in crisis, set tasks aside, respond with warmth, and encourage her to reach someone near her or a crisis line (988 in the US).',
      'App context: it is the '+S.part+' (about '+fmt(SIM[S.part])+'). Next routine step: '+(nx?stepOf(nx).t:'none left')+'. Plans today: '+evs+'. Parking lot (tasks with no set time): '+pk+'. '+(PROF&&PROF.partner?' Her partner is §P.':'')+(PROF&&PROF.pet?' Her pets: §C.':'')+' Voice for this reply: '+L.voice+(S.logic==='mammal'?' Today\'s mood: '+MOODS[S.mood].name+' ('+MOODS[S.mood].desc+').'+(S.mood==='dreamy'?' Remind her gently that fun things will still be there later, that doing the hard thing first is worth celebrating, and that she is never not allowed to have fun.':''):''),
      'Only use the app context if it is relevant; do not recite it.'].join('\n\n'));
  }
  function bub(r,t,busy,fresh){return '<div class="bub '+r+(busy?' dots':'')+(fresh?' in':'')+'">'+(busy?'<span></span><span></span><span></span>':esc(t))+'</div>'}
  function chatRender(){
    var root=document.getElementById('chatRoot'),c=S.chat,old=document.getElementById('chatin'),val=old?old.value:'';
    if(!c.open){root.innerHTML='';return}
    var u=U(),h='<div class="backdrop" data-a="cbg"><div class="sheet chatsheet" role="dialog" aria-modal="true" aria-label="Stuck helper"><div class="between"><h2 style="font-size:22px">'+esc(u.ctitle)+'</h2><div class="row" style="gap:4px"><button class="quiet" data-a="cnew">New chat</button><button class="x" data-a="cclose" aria-label="Close">&times;</button></div></div><div class="msgs" id="msgs" aria-live="polite">';
    h+=bub('a',S.noAI?(S.logic==='mammal'?'Hello, little one. What is going on in the den? Tap whichever is closest.':'Hi. What is going on? Tap whichever is closest.'):u.hello);
    c.msgs.forEach(function(m,i){h+=bub(m.r,m.t,c.busy&&i===c.msgs.length-1&&m.r==='a'&&!m.t,m.fresh);m.fresh=0});
    if(S.noAI&&c.wait)h+=bub('a','',true,true);
    h+='</div>';
    if(S.noAI&&c.wait){}
    else if(!c.msgs.length){h+='<div class="chips sm">';STARTERS.forEach(function(q){h+='<button data-a="cstart" data-v="'+esc(q)+'">'+esc(q)+'</button>'});h+='</div>'}
    else if(S.noAI&&c.opts){h+='<div class="chips sm">';Object.keys(c.opts).forEach(function(q){h+='<button data-a="chp" data-v="'+esc(q)+'">'+esc(q)+'</button>'});h+='</div>'}
    else if(S.noAI){
      var acts=(c.act||[]).filter(function(k){return k!=='pl'||plPool().length>=2});
      if(acts.length){h+='<div class="row">';acts.forEach(function(k){h+='<button class="btn alt grow" data-a="hact" data-v="'+(k==='pl'?'plopen':k==='tour'?'tourgo':'rough')+'">'+esc(k==='pl'?u.plbtn:k==='tour'?'Start the tour':'Rough day options')+'</button>'});h+='</div>'}
      h+='<div class="row">'+(c.appq?'<button class="quiet" data-a="chpapp">Another app question</button>':'')+'<button class="quiet" data-a="cnew">Something else</button></div>';
    }
    if(c.err)h+='<div class="note" role="alert">'+esc(c.err)+(c.retry?' <button class="quiet" data-a="cretry">Try again</button>':'')+'</div>';
    if(!S.noAI)h+='<form class="chatform" id="chatform"><input class="field" type="text" id="chatin" placeholder="Tell me what is going on" autocomplete="off" aria-label="Message">'+(c.busy?'<button type="button" class="btn alt" data-a="cstop">Stop</button>':'<button type="submit" class="btn">Send</button>')+'</form>';
    h+='</div></div>';
    root.innerHTML=fx(h);
    var inp=document.getElementById('chatin');if(inp)inp.value=val;
    var m=document.getElementById('msgs');if(m)m.scrollTop=m.scrollHeight;
  }
  function focusChat(){var i=document.getElementById('chatin');if(i)i.focus()}
  function paintLast(t){
    var m=document.getElementById('msgs');if(!m)return;
    var all=m.querySelectorAll('.bub.a'),b=all[all.length-1];if(!b)return;
    b.classList.remove('dots');b.textContent=t;m.scrollTop=m.scrollHeight;
  }
  function errCopy(code){
    if(code==='rate_limited')return 'Too many messages too quickly, or your Claude usage limit is reached. Try again in a little while.';
    if(code==='not_granted'||code==='sampling_disabled'||code==='not_declared'||code==='capability_disabled'||code==='capability_removed')return 'The helper is not switched on for this page, so I cannot reply here.';
    if(code==='session_expired')return 'You need to sign in again to keep chatting.';
    if(code==='refused')return 'I could not answer that one. Try putting it a different way.';
    return 'That did not go through.';
  }
  function chatSend(text){
    var c=S.chat;text=(text||'').trim();if(!text||c.busy)return;
    c.msgs.push({r:'u',t:text});c.msgs.push({r:'a',t:''});c.busy=true;c.err='';c.retry='';
    var i0=document.getElementById('chatin');if(i0)i0.value='';
    chatRender();focusChat();
    var last=c.msgs[c.msgs.length-1];
    getSample().then(function(sample){
      if(!sample)throw {code:'not_granted'};
      CHATCTL=new AbortController();
      var turns=[{role:'user',content:chatRules()}];
      c.msgs.slice(0,-1).slice(-30).forEach(function(m){if(m.t)turns.push({role:m.r==='u'?'user':'assistant',content:m.t})});
      return sample(turns,{cache:false,modelTier:'quick',signal:CHATCTL.signal,onText:function(up){last.t=up.text;paintLast(up.text)}});
    }).then(function(res){last.t=res.text;if(res.truncated)last.t+='...'}).catch(function(e){
      e=e||{};
      if(e.text)last.t=e.text;
      if(!last.t){var ix=c.msgs.indexOf(last);if(ix>=0)c.msgs.splice(ix,1)}
      if(e.code!=='cancelled'){c.err=errCopy(e.code);c.retry=(e.code==='not_granted'||e.code==='sampling_disabled'||e.code==='not_declared'||e.code==='capability_disabled'||e.code==='capability_removed')?'':text;
        if(!c.retry)S.noAI=true}
    }).then(function(){c.busy=false;CHATCTL=null;chatRender();if(c.open)focusChat()});
  }
  function chatClose(){if(CHATCTL)CHATCTL.abort();S.chat.open=false;chatRender();render()}
  document.addEventListener('submit',function(e){if(e.target&&e.target.id==='chatform'){e.preventDefault();var i=document.getElementById('chatin');if(i)chatSend(i.value)}});

  /* ---- swipe a sheet down to close it ---- */
  var SW=null,CLOSERS={mbg:'mclose',rbg:'rcancel',evbg:'evclose',nbg:'ncancel',sqbg:'sqno',cebg:'cecancel',fgbg:'fgbg',cbg:'cclose',tkbg:'tkclose',plbg:'plclose',rtbg:'rtclose'};
  document.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target&&e.target.id==='tk-step'){e.preventDefault();A.tkstepadd()}});
  document.addEventListener('touchstart',function(e){
    if(D||!e.touches||e.touches.length!==1)return;
    var sh=e.target.closest&&e.target.closest('.sheet');if(!sh)return;
    var bd=sh.parentNode;if(!bd||!bd.dataset||!CLOSERS[bd.dataset.a])return;
    if(e.target.closest('input,textarea,button.x,.grip'))return;
    for(var n=e.target;n&&n!==bd;n=n.parentNode){if(n.scrollTop>0)return}
    var y=e.touches[0].clientY;
    if(sh.classList.contains('chatsheet')&&y-sh.getBoundingClientRect().top>72)return;
    SW={sh:sh,bd:bd,y0:y,dy:0,on:false,t0:Date.now()};
  },{passive:true});
  document.addEventListener('touchmove',function(e){
    if(!SW||!e.touches.length)return;
    var dy=e.touches[0].clientY-SW.y0;
    if(!SW.on){if(dy>10)SW.on=true;else{if(dy<-6)SW=null;return}}
    SW.dy=dy;SW.sh.style.transition='none';SW.sh.style.transform='translateY('+Math.max(0,dy)+'px)';
    if(e.cancelable)e.preventDefault();
  },{passive:false});
  function swEnd(){
    if(!SW)return;var w=SW;SW=null;if(!w.on)return;
    if(w.dy>110||((Date.now()-w.t0)<300&&w.dy>40)){var f=A[CLOSERS[w.bd.dataset.a]];if(f)f()}
    else{w.sh.style.transition='transform .18s ease';w.sh.style.transform='none'}
  }
  document.addEventListener('touchend',swEnd);document.addEventListener('touchcancel',swEnd);
  document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;if(D&&D.active){endDrag(false);return}if(S.chat.open){chatClose();return}if(S.pl){A.plclose();return}if(S.rp||S.menu||S.ev||S.ns||S.tk){closeSheets();render();return}if(S.lot){S.lot=false;render()}});
  try{var _mq=window.matchMedia('(prefers-color-scheme: dark)');var _fn=function(){applyLook()};if(_mq.addEventListener)_mq.addEventListener('change',_fn)}catch(e){}
  S.pv=pvParse();
  function startLive(tries){if(!S.pv||!S.pv.live)return;if(window.GSSync&&window.GSSync.watchLive){window.GSSync.watchLive(S.pv.live,function(d){if(!S.pv)return;S.pv.loading=false;S.pv.data=d;render()});return}if((tries||0)>40){S.pv.slow=true;render();return}setTimeout(function(){startLive((tries||0)+1)},300)}
  startLive(0);
  window.addEventListener('hashchange',function(){S.pv=pvParse();startLive(0);render()});
  seedSamples();
  if(localStorage.getItem('gs-gosetup')){localStorage.removeItem('gs-gosetup');try{A.startcust()}catch(e){}}
  /* today's done and skipped steps survive a refresh (and sync between devices); a new day starts fresh */
  (function(){var st=load('gs-status',null),tk=ymd(new Date());S.status=(st&&st.d===tk&&st.s)?st.s:{};S.statusDay=tk;S.statusSaved=JSON.stringify(S.status)})();
  /* follow the real time of day: the clock updates every minute, and the part of the day moves on its own */
  function rollDaily(){
    var tk=ymd(new Date()),ch=false;
    S.tasks.forEach(function(t){if(t.done||t.h!=='day')return;if(!t.dayOf){t.dayOf=tk;ch=true;return}if(t.dayOf<tk){if(t.must)t.dayOf=tk;else{t.h='week';delete t.dayOf}ch=true}});
    if(ch)saveTasks();return ch;
  }
  function syncClock(first){
    if(rollDaily()&&!first&&!document.querySelector('.sheet'))render();
    var n=new Date(),m=n.getHours()*60+n.getMinutes(),o=S.dayOff||0;
    if(S.tour!==null&&S.tour!==undefined)m=570+o; /* the tour always shows a 9:30 morning, so the morning-only parts are there to point at */
    SIM.morning=SIM.afternoon=SIM.evening=m;
    var p=m<720+o?'morning':m<1020+o?'afternoon':'evening';
    if(first||p!==S.autoPart){var moved=!first;S.autoPart=p;S.part=p;S.shift=0;if(moved&&!S.menu&&!S.ev&&!S.tk&&!S.setup&&!S.lot&&!document.querySelector('.sheet'))render()}
  }
  syncClock(true);
  if(S.tasks.some(function(t){return !t.done&&t.h==='day'}))S.lotTab='day';
  setInterval(function(){syncClock(false)},60000);
  document.addEventListener('visibilitychange',function(){if(!document.hidden)syncClock(false)});
  try{applyLook()}catch(e){}
  (function(){try{var q=new URLSearchParams(location.search),st=[q.get('title'),q.get('text'),q.get('url')].filter(Boolean).join(' ').trim();
    if(st){history.replaceState(null,'',location.pathname+location.hash);S.tab='today';S.ev=newEv();fillFromText(st)}}catch(e){}})();
  render();
  document.addEventListener('submit',function(e){
    var f=e.target;if(!f||(f.id!=='welcomeform'&&f.id!=='profform'))return;e.preventDefault();
    function g(i){var x=document.getElementById(i);return x?x.value:''}
    saveProf({name:g('pf-name'),partner:g('pf-partner'),pets:g('pf-pets'),kids:g('pf-kids'),others:g('pf-others')});
    setTrk((S.incl&&S.incl.health)?splitNames(g('pf-health')):[]);
    if(f.id==='profform'){keepSheet(render)}else{afterWelcome();render()}
  });
  document.addEventListener('change',function(e){
    var ls=e.target;if(ls&&ls.classList&&ls.classList.contains('lsedit')){
      var L=S.lists[+ls.dataset.l],v=ls.value.trim();if(!L)return;
      if(ls.dataset.i===undefined){if(v){L.name=v.slice(0,40);save('gs-lists',S.lists)}else ls.value=L.name}
      else{var it=L.items[+ls.dataset.i];if(it){if(v){it.t=v.slice(0,120);save('gs-lists',S.lists)}else ls.value=it.t}}
      return}
    var el=e.target;if(!el||el.id!=='dimport'||!el.files||!el.files[0])return;
    var f=el.files[0],r=new FileReader();
    r.onload=function(){
      try{
        var o=JSON.parse(r.result);
        if(!o||o.app!=='gentle-start'||!o.data||typeof o.data!=='object')throw 0;
        var n=Object.keys(o.data).filter(function(k){return k.indexOf('gs-')===0}).length;
        if(!n)throw 0;
        S.dataPending={data:o.data,n:n,when:o.saved?new Date(o.saved).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}):''};S.dataMsg='';
      }catch(err){S.dataPending=null;S.dataMsg='That file does not look like a Gentle Start backup.'}
      keepSheet(render);
    };
    r.readAsText(f);
  });
  /* lists and the routine editor: swipe left to reveal Delete; swiping left again on an open row deletes it */
  (function(){
    var SW=null,openLi=null,eat=false;
    function close(li){li.classList.remove('dragging');li.style.setProperty('--sx','0px');setTimeout(function(){if(li.style.getPropertyValue('--sx')==='0px')li.classList.remove('swp')},220);if(openLi===li)openLi=null}
    document.addEventListener('pointerdown',function(e){
      var li=e.target.closest&&e.target.closest('.items li.item, ul.rtl li');
      if(openLi&&li!==openLi)close(openLi);
      if(!li||!li.querySelector('.swdel')||(e.target.closest('.swdel')&&li!==openLi)||e.target.closest('.grip'))return;
      SW={li:li,x:e.clientX,y:e.clientY,id:e.pointerId,base:li===openLi?-84:0,v:li===openLi?-84:0,on:false};
    });
    document.addEventListener('pointermove',function(e){
      if(!SW||e.pointerId!==SW.id)return;
      var dx=e.clientX-SW.x,dy=e.clientY-SW.y;
      if(!SW.on){if(Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)*1.4){SW.on=true;SW.li.classList.add('swp','dragging')}else if(Math.abs(dy)>10){SW=null;return}else return}
      SW.v=Math.min(0,Math.max(-SW.li.offsetWidth*0.8,SW.base+dx));SW.li.style.setProperty('--sx',SW.v+'px');
    });
    function up(e){
      if(!SW||(e&&e.pointerId!==SW.id))return;var d=SW;SW=null;if(!d.on)return;
      eat=true;setTimeout(function(){eat=false},400);d.li.classList.remove('dragging');
      if(d.base<0&&d.v<d.base-40){var b=d.li.querySelector('.swdel');openLi=null;if(b)b.click()}
      else if(d.v<-50){d.li.style.setProperty('--sx','-84px');openLi=d.li}
      else close(d.li);
    }
    document.addEventListener('pointerup',up);document.addEventListener('pointercancel',up);
    document.addEventListener('click',function(e){if(eat&&!(e.target.closest&&e.target.closest('.swdel'))){e.stopPropagation();e.preventDefault();eat=false}},true);
  })();
  /* routine reorder: drag the grab bar (or use arrow keys on it) */
  (function(){
    var G=null;
    function saveOrder(){
      var off={};['morning','afternoon','evening'].forEach(function(p){off[p]=S.rtn.parts[p].filter(function(id){return offId(id)})});
      document.querySelectorAll('ul.rtl[data-p]').forEach(function(ul){var p=ul.dataset.p;
        S.rtn.parts[p]=Array.prototype.map.call(ul.children,function(li){li.dataset.p=p;return li.dataset.id}).concat(off[p]||[])});
      saveRtn();
    }
    function ty(el){var t=getComputedStyle(el).transform;if(!t||t==='none')return 0;try{return new DOMMatrix(t).m42}catch(x){var m=t.match(/matrix\(([^)]+)\)/);return m?+m[1].split(',')[5]||0:0}}
    function nat(el){var r=el.getBoundingClientRect();return {top:r.top-ty(el),h:r.height}}
    function lis(){return Array.prototype.slice.call(document.querySelectorAll('ul.rtl[data-p] > li'))}
    function follow(){if(!G)return;var n=nat(G.li);G.li.style.transform='translateY('+(G.y-G.off-n.top)+'px)'}
    function place(){
      var y=G.y,uls=document.querySelectorAll('ul.rtl[data-p]'),tgt=null;
      for(var u=0;u<uls.length;u++){var ur=uls[u].getBoundingClientRect();if(y>=ur.top-18&&y<=ur.bottom+18){tgt=uls[u];break}}
      document.querySelectorAll('ul.rtl.droptgt').forEach(function(x){if(x!==tgt)x.classList.remove('droptgt')});
      if(!tgt)return;tgt.classList.add('droptgt');
      var sib=Array.prototype.slice.call(tgt.children).filter(function(s){return s!==G.li}),before=null;
      for(var i=0;i<sib.length;i++){var r=nat(sib[i]);if(y<r.top+r.h/2){before=sib[i];break}}
      if(G.li.parentNode===tgt&&G.li.nextElementSibling===before)return;
      if(G.li.parentNode===tgt&&!before&&!G.li.nextElementSibling)return;
      /* FLIP: remember where everyone was, move, then let them glide from there */
      var all=lis().filter(function(x){return x!==G.li}),first=all.map(function(x){return x.getBoundingClientRect().top});
      tgt.insertBefore(G.li,before);G.ul=tgt;
      all.forEach(function(x,i){x.style.transition='none';x.style.transform='';var d=first[i]-x.getBoundingClientRect().top;if(d){x.style.transform='translateY('+d+'px)'}});
      void document.body.offsetHeight;
      all.forEach(function(x){if(x.style.transform){x.style.transition='transform .18s ease';x.style.transform=''}});
    }
    var raf=0;
    function tick(){raf=0;if(!G)return;place();follow();
      var sh=G.li.closest('.sheet');if(sh){var sr=sh.getBoundingClientRect();if(G.y<sr.top+60){sh.scrollTop-=8;raf=requestAnimationFrame(tick)}else if(G.y>sr.bottom-60){sh.scrollTop+=8;raf=requestAnimationFrame(tick)}}}
    document.addEventListener('pointerdown',function(e){
      var g=e.target.closest&&e.target.closest('.grip');if(!g)return;
      e.preventDefault();var li=g.closest('li'),ul=li.parentNode,r=li.getBoundingClientRect();
      G={li:li,ul:ul,id:e.pointerId,g:g,y:e.clientY,off:e.clientY-r.top};try{g.setPointerCapture(e.pointerId)}catch(x){}
      li.style.transition='none';li.classList.add('gripping');document.body.classList.add('rtdragging');
    });
    document.addEventListener('pointermove',function(e){
      if(!G||e.pointerId!==G.id)return;G.y=e.clientY;if(!raf)raf=requestAnimationFrame(tick);
    });
    function end(e){if(!G||(e&&e.pointerId!==G.id))return;var d=G;G=null;if(raf){cancelAnimationFrame(raf);raf=0}
      document.body.classList.remove('rtdragging');document.querySelectorAll('ul.rtl.droptgt').forEach(function(x){x.classList.remove('droptgt')});
      d.li.style.transition='transform .18s ease';d.li.style.transform='';
      setTimeout(function(){d.li.classList.remove('gripping');d.li.style.transition=''},190);
      lis().forEach(function(x){if(x!==d.li){x.style.transition='';x.style.transform=''}});
      saveOrder()}
    document.addEventListener('pointerup',end);document.addEventListener('pointercancel',end);
    document.addEventListener('keydown',function(e){
      var g=e.target.classList&&e.target.classList.contains('grip')?e.target:null;if(!g||(e.key!=='ArrowUp'&&e.key!=='ArrowDown'))return;
      e.preventDefault();var li=g.closest('li'),ul=li.parentNode,s=e.key==='ArrowUp'?li.previousElementSibling:li.nextElementSibling;
      if(s){if(e.key==='ArrowUp')ul.insertBefore(li,s);else ul.insertBefore(s,li)}
      else{var all=Array.prototype.slice.call(document.querySelectorAll('ul.rtl[data-p]')),k=all.indexOf(ul)+(e.key==='ArrowUp'?-1:1);if(k<0||k>=all.length)return;
        if(e.key==='ArrowUp')all[k].appendChild(li);else all[k].insertBefore(li,all[k].firstChild)}
      saveOrder();g.focus();
    });
  })();
  /* Ocean header: tap a bubble to pop it, tap the water to make the waves drift */
  document.addEventListener('click',function(e){
    var t=e.target;if(!t.closest)return;
    var bb=t.closest('.deco .bub');
    if(bb){bb.classList.remove('pop');void bb.getBoundingClientRect();bb.classList.add('pop');setTimeout(function(){bb.classList.remove('pop')},2300);return}
    var wv=t.closest('.deco .wv');
    if(wv){var sv=wv.ownerSVGElement;sv.classList.remove('drift');void sv.getBoundingClientRect();sv.classList.add('drift');setTimeout(function(){sv.classList.remove('drift')},1700)}
  });
  document.addEventListener('change',function(e){if(e.target&&e.target.id==='dtxtime'&&e.target.value){S.dtx.time=e.target.value;save('gs-dtx',S.dtx)}});
  /* the names in Settings save as you type, like every other setting */
  function profVals(){function g(i){var x=document.getElementById(i);return x?x.value:null}return {name:g('pf-name'),partner:g('pf-partner'),pets:g('pf-pets'),kids:g('pf-kids'),others:g('pf-others'),health:g('pf-health')}}
  function saveProfVals(v,dropTrk){
    var p=PROF||{};
    saveProf({name:v.name!==null?v.name:(p.name||''),partner:v.partner!==null?v.partner:listStr(p.partners||[]),pets:v.pets!==null?v.pets:listStr(p.pets||[]),kids:v.kids!==null?v.kids:listStr(p.kids||[]),others:v.others!==null?v.others:listStr(p.others||[])});
    if(dropTrk)setTrk([]);else if(v.health!==null&&v.health.trim())setTrk(splitNames(v.health));
  }
  var profTimer=null;
  document.addEventListener('input',function(e){if(e.target.closest&&e.target.closest('#profform')){var v=profVals();clearTimeout(profTimer);profTimer=setTimeout(function(){saveProfVals(v,false)},400)}});
  getSample().then(function(f){if(!f){S.noAI=true;render()}});
})();
