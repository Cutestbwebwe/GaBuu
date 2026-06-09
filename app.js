// ===== PRODUCT DATA =====
const products = [
  {
    id: 1, name: "La Belle Rose 玫瑰花束", nameEn: "La Belle Rose",
    price: 188, priceDisplay: "RM188",
    desc: "A luxurious arrangement of 24 premium red roses, wrapped in signature cream paper with velvet ribbon. Perfect for expressing deep love.",
    descCn: "24朵优质红玫瑰豪华花束，以奶白纸包裹系上丝绒缎带，完美表达深情爱意。",
    tags: ["birthday", "valentine", "fresh"], colors: ["red"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    size: ["Small", "Medium", "Large"], emoji: "🌹",
    budget: ["budget-mid"], featured: true,
    sizes: [{label: "Small (12 stems)", price: 128}, {label: "Medium (24 stems)", price: 188}, {label: "Large (36 stems)", price: 268}]
  },
  {
    id: 2, name: "Eternal Knit Pastel 针织粉彩花束", nameEn: "Eternal Knit Pastel",
    price: 148, priceDisplay: "RM148",
    desc: "Handcrafted knit bouquet in soft pastel tones — roses, tulips and baby's breath. Lasts forever, the perfect keepsake.",
    descCn: "手工制作粉彩针织花束，包含玫瑰、郁金香和满天星，永久保存，完美纪念品。",
    tags: ["birthday", "mothers", "knit"], colors: ["pink", "white"],
    badge: "knit", badgeLabel: "Knit 针织",
    emoji: "🧶", budget: ["budget-mid"], featured: true,
    sizes: [{label: "Small", price: 108}, {label: "Medium", price: 148}, {label: "Large", price: 198}]
  },
  {
    id: 3, name: "Graduation Glory 毕业荣耀", nameEn: "Graduation Glory",
    price: 128, priceDisplay: "RM128",
    desc: "A vibrant sunflower and yellow rose arrangement, symbolising achievement and bright futures. Includes personalised congratulations card.",
    descCn: "充满活力的向日葵与黄玫瑰花束，象征成就与光明未来，附赠个性化祝贺贺卡。",
    tags: ["graduation", "fresh"], colors: ["yellow", "mixed"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    emoji: "🌻", budget: ["budget-mid"], featured: true,
    sizes: [{label: "Small", price: 98}, {label: "Medium", price: 128}, {label: "Large", price: 178}]
  },
  {
    id: 4, name: "Velvet Dream 丝绒梦境", nameEn: "Velvet Dream",
    price: 228, priceDisplay: "RM228",
    desc: "Deep burgundy and blush peony bouquet, exuding old-world luxury. Ideal for romantic occasions and anniversaries.",
    descCn: "深酒红与粉白牡丹花束，散发古典奢华气息，最适合浪漫场合与周年纪念。",
    tags: ["valentine", "birthday", "fresh"], colors: ["red", "pink"],
    badge: "hot", badgeLabel: "Bestseller 畅销",
    emoji: "🌺", budget: ["budget-high"], featured: true,
    sizes: [{label: "Medium", price: 228}, {label: "Large", price: 328}, {label: "Grand", price: 458}]
  },
  {
    id: 5, name: "Mother's Grace 母爱芬芳", nameEn: "Mother's Grace",
    price: 158, priceDisplay: "RM158",
    desc: "A gentle arrangement of pink peonies, white tulips and eucalyptus — crafted to honour the most important woman in your life.",
    descCn: "粉色牡丹、白郁金香与尤加利的温柔花束，专为世界上最重要的女人而作。",
    tags: ["mothers", "birthday", "fresh"], colors: ["pink", "white"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    emoji: "🌷", budget: ["budget-mid"], featured: false,
    sizes: [{label: "Small", price: 118}, {label: "Medium", price: 158}, {label: "Large", price: 218}]
  },
  {
    id: 6, name: "Sage & Bloom 绿意盎然", nameEn: "Sage & Bloom",
    price: 168, priceDisplay: "RM168",
    desc: "A serene mix of white roses, sage green chrysanthemums and lush eucalyptus — clean, modern, and utterly elegant.",
    descCn: "白玫瑰、鼠尾草绿菊花与丰盛尤加利的宁静混搭，简洁现代，优雅无比。",
    tags: ["birthday", "opening", "fresh"], colors: ["white", "mixed"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    emoji: "🌿", budget: ["budget-mid"], featured: false,
    sizes: [{label: "Small", price: 128}, {label: "Medium", price: 168}, {label: "Large", price: 228}]
  },
  {
    id: 7, name: "Knit Forever Pink 永恒粉针织", nameEn: "Knit Forever Pink",
    price: 88, priceDisplay: "RM88",
    desc: "Our bestselling small knit bouquet in all-pink tones. The perfect gift that never wilts — ideal for all occasions.",
    descCn: "全粉色小型针织花束，我们的畅销款，完美礼物不会凋谢，适合任何场合。",
    tags: ["birthday", "valentine", "mothers", "knit"], colors: ["pink"],
    badge: "knit", badgeLabel: "Knit 针织",
    emoji: "🧶", budget: ["budget-low"], featured: false,
    sizes: [{label: "Small", price: 88}, {label: "Medium", price: 138}, {label: "Large", price: 188}]
  },
  {
    id: 8, name: "Grand Opening Basket 开业花篮", nameEn: "Grand Opening Basket",
    price: 388, priceDisplay: "RM388",
    desc: "An opulent standing floral arrangement perfect for business openings. Includes prosperity wishes and a premium ribbon banner.",
    descCn: "豪华落地花篮，完美适合开业庆典，附赠繁荣祝福与高级缎带横幅。",
    tags: ["opening", "fresh"], colors: ["mixed"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    emoji: "🎊", budget: ["budget-high"], featured: false,
    sizes: [{label: "Standard", price: 388}, {label: "Premium", price: 588}]
  },
  {
    id: 9, name: "Purple Haze 紫色迷雾", nameEn: "Purple Haze",
    price: 148, priceDisplay: "RM148",
    desc: "A dreamy bouquet of lavender, purple lisianthus and white roses — mystical and romantic.",
    descCn: "薰衣草、紫色桔梗与白玫瑰的梦幻花束，神秘浪漫。",
    tags: ["birthday", "valentine", "fresh"], colors: ["purple", "white"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    emoji: "💜", budget: ["budget-mid"], featured: false,
    sizes: [{label: "Small", price: 108}, {label: "Medium", price: 148}, {label: "Large", price: 208}]
  },
  {
    id: 10, name: "Cream & Gold 奢华奶金", nameEn: "Cream & Gold",
    price: 258, priceDisplay: "RM258",
    desc: "Cream roses, champagne spray roses and gold-dusted fillers — pure luxury for the most special moments.",
    descCn: "奶油玫瑰、香槟喷射玫瑰与金粉填充花材，纯粹奢华，专为最特别的时刻。",
    tags: ["birthday", "mothers", "fresh"], colors: ["white", "mixed"],
    badge: "hot", badgeLabel: "Premium 臻品",
    emoji: "✨", budget: ["budget-high"], featured: false,
    sizes: [{label: "Medium", price: 258}, {label: "Large", price: 368}, {label: "Grand", price: 528}]
  },
  {
    id: 11, name: "Grad Knit Bundle 毕业针织套装", nameEn: "Grad Knit Bundle",
    price: 168, priceDisplay: "RM168",
    desc: "Celebratory knit bouquet in school/university colours — personalise with your grad's palette. Forever keepsake.",
    descCn: "以学校/大学颜色为主题的针织花束，可个性化定制配色，永久纪念品。",
    tags: ["graduation", "knit"], colors: ["mixed"],
    badge: "knit", badgeLabel: "Knit 针织",
    emoji: "🎓", budget: ["budget-mid"], featured: false,
    sizes: [{label: "Small", price: 128}, {label: "Medium", price: 168}, {label: "Large", price: 228}]
  },
  {
    id: 12, name: "Baby Breath Cloud 满天星云", nameEn: "Baby Breath Cloud",
    price: 78, priceDisplay: "RM78",
    desc: "A pure, dreamy cloud of white baby's breath — minimalist, romantic, and breathtakingly beautiful.",
    descCn: "纯白满天星的梦幻花束，简约浪漫，令人叹为观止的美丽。",
    tags: ["birthday", "valentine", "fresh"], colors: ["white"],
    badge: "fresh", badgeLabel: "Fresh 鲜花",
    emoji: "🤍", budget: ["budget-low"], featured: false,
    sizes: [{label: "Small", price: 78}, {label: "Medium", price: 118}, {label: "Large", price: 158}]
  }
];

// ===== APP STATE =====
let cart = JSON.parse(localStorage.getItem('gabuuCart') || '[]');
let currentProduct = null;
let activeFilters = { occasion: [], type: [], budget: [], color: [] };
let buildSelections = { type: null, flowers: [], color: null, size: null };
let currentPage = 'home';

// ===== PAGE NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'shop') renderShop();
  if (page === 'cart') renderCart();
  if (page === 'checkout') renderCheckout();
  updateCartBadge();
}

function closeMenu() {
  document.getElementById('navMenu').classList.remove('open');
}

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ===== RENDER FEATURED =====
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = products.filter(p => p.featured);
  grid.innerHTML = featured.map(p => productCard(p)).join('');
}

// ===== RENDER SHOP =====
function renderShop(filtered = null) {
  const grid = document.getElementById('shopGrid');
  const list = filtered || products;
  grid.innerHTML = list.length ? list.map(p => productCard(p)).join('') : '<p style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px">No products found. Try clearing filters. 没有找到商品，请清除筛选条件。</p>';
  document.getElementById('resultsCount').textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''} · 显示 ${list.length} 件商品`;
}

function productCard(p) {
  return `
  <div class="product-card" onclick="showProduct(${p.id})">
    <div class="product-img">
      <div class="product-img-placeholder">
        <div class="placeholder-icon">${p.emoji}</div>
        <p>Photo Coming Soon</p>
      </div>
      <span class="product-badge ${p.badge}">${p.badgeLabel}</span>
    </div>
    <div class="product-info">
      <div class="product-tags">${p.tags.map(t => `<span class="product-tag">${tagLabel(t)}</span>`).join('')}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.desc.substring(0, 70)}...</p>
      <div class="product-footer">
        <div class="product-price"><span class="from">From </span>${p.priceDisplay}</div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation();quickAdd(${p.id})">+ Add 加入</button>
      </div>
    </div>
  </div>`;
}

function tagLabel(t) {
  const map = { birthday: 'Birthday 生日', graduation: 'Graduation 毕业', valentine: "Valentine's 情人节", mothers: "Mother's Day 母亲节", opening: 'Opening 开业', fresh: 'Fresh 鲜花', knit: 'Knit 针织' };
  return map[t] || t;
}

// ===== PRODUCT DETAIL =====
function showProduct(id) {
  currentProduct = products.find(p => p.id === id);
  if (!currentProduct) return;
  const p = currentProduct;
  document.getElementById('productDetail').innerHTML = `
    <div class="product-gallery">
      <div class="product-main-img">
        <div class="product-img-placeholder">
          <div class="placeholder-icon" style="font-size:5rem">${p.emoji}</div>
          <p style="font-family:var(--font-display);font-size:1.1rem;color:var(--text-light);margin-top:10px">Product Image</p>
          <span style="font-size:0.72rem;color:var(--pink-deep)">Please provide photo</span>
        </div>
      </div>
      <div class="product-thumbnails">
        ${[1,2,3,4].map((i,idx) => `<div class="product-thumb ${idx===0?'active':''}" onclick="selectThumb(this)">${p.emoji}</div>`).join('')}
      </div>
    </div>
    <div class="product-detail-info">
      <div class="product-detail-tags">${p.tags.map(t => `<span class="product-tag">${tagLabel(t)}</span>`).join('')}</div>
      <h1 class="product-detail-name">${p.name}</h1>
      <div class="product-detail-price" id="detailPrice">From ${p.priceDisplay}</div>
      <div class="product-detail-desc">
        <p>${p.desc}</p>
        <br/>
        <p style="font-size:0.85rem;color:var(--text-light)">${p.descCn}</p>
      </div>
      <div class="detail-options">
        <div class="detail-option-label">Size 尺寸</div>
        <div class="size-options">
          ${p.sizes.map((s,i) => `<button class="size-btn ${i===0?'active':''}" onclick="selectSize(this,'${s.label}',${s.price})">${s.label}<br/><span style="font-size:0.7rem;opacity:0.7">RM${s.price}</span></button>`).join('')}
        </div>
      </div>
      <div class="detail-form">
        <div class="form-row">
          <label>Greeting Card Message 贺卡留言 (optional)</label>
          <textarea id="pdMessage" class="form-input" rows="3" placeholder="Write your message here... 写下您的祝福..."></textarea>
        </div>
        <div class="form-row">
          <label>Delivery Date 配送日期</label>
          <input type="date" id="pdDate" class="form-input" min="${new Date().toISOString().split('T')[0]}" />
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn-primary" onclick="addToCart(${p.id})">Add to Cart 加入购物车</button>
        <button class="btn-ghost" onclick="window.open('https://wa.me/60126432729?text=Hi%20GaBuu%2C%20I%27m%20interested%20in%20${encodeURIComponent(p.name)}','_blank')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Enquire via WhatsApp
        </button>
      </div>
    </div>`;
  showPage('product');
}

function selectThumb(el) {
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(btn, label, price) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('detailPrice').textContent = `${label} — RM${price}`;
}

// ===== FILTERS =====
function filterShop(tag) {
  clearFilters();
  const checkboxes = document.querySelectorAll('#page-shop input[type="checkbox"]');
  checkboxes.forEach(cb => {
    if (cb.value === tag) { cb.checked = true; }
  });
  applyFilters();
}

function applyFilters() {
  const checks = document.querySelectorAll('#page-shop input[type="checkbox"]:checked');
  const selected = Array.from(checks).map(c => c.value);
  if (!selected.length) { renderShop(); return; }

  const occasions = selected.filter(v => ['birthday','graduation','valentine','mothers','opening'].includes(v));
  const types = selected.filter(v => ['fresh','knit'].includes(v));
  const budgets = selected.filter(v => v.startsWith('budget'));
  const colors = selected.filter(v => ['pink','white','red','purple','yellow','mixed'].includes(v));

  let filtered = products.filter(p => {
    const matchOcc = !occasions.length || occasions.some(o => p.tags.includes(o));
    const matchType = !types.length || types.some(t => p.tags.includes(t));
    const matchBudget = !budgets.length || budgets.some(b => p.budget.includes(b));
    const matchColor = !colors.length || colors.some(c => p.colors.includes(c));
    return matchOcc && matchType && matchBudget && matchColor;
  });
  renderShop(filtered);
}

function clearFilters() {
  document.querySelectorAll('#page-shop input[type="checkbox"]').forEach(cb => cb.checked = false);
  renderShop();
}

function sortProducts(val) {
  let list = [...products];
  if (val === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (val === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (val === 'name') list.sort((a,b) => a.nameEn.localeCompare(b.nameEn));
  renderShop(list);
}

// ===== CART =====
function quickAdd(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  const existing = cart.find(c => c.id === id && !c.custom);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: p.name, price: p.price, priceDisplay: p.priceDisplay, emoji: p.emoji, qty: 1, size: p.sizes[0].label }); }
  saveCart();
  updateCartBadge();
  showToast(`${p.emoji} Added to cart! 已加入购物车`);
}

function addToCart(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  const sizeBtn = document.querySelector('.size-btn.active');
  const sizeLabel = sizeBtn ? sizeBtn.textContent.split('\n')[0] : p.sizes[0].label;
  const sizePrice = sizeBtn ? p.sizes.find(s => s.label === sizeLabel)?.price || p.price : p.price;
  const message = document.getElementById('pdMessage')?.value || '';
  const date = document.getElementById('pdDate')?.value || '';
  cart.push({ id, name: p.name, price: sizePrice, priceDisplay: `RM${sizePrice}`, emoji: p.emoji, qty: 1, size: sizeLabel, message, date });
  saveCart();
  updateCartBadge();
  showToast(`${p.emoji} Added to cart! 已加入购物车`);
}

function addCustomToCart() {
  function addCustomToCart() {
  if (!buildSelections.size) { 
    showToast('Please select a size first! 请先选择尺寸'); 
    return; 
  }
  
  // 获取基础价格
  const basePrice = parseInt(buildSelections.size.match(/RM(\d+)/)?.[1] || 88);
  
  // 计算 Add-ons 的额外价钱
  let addonsPrice = 0;
  let addonsSelected = [];
  
  const addonsMap = {
    'teddy': { price: 25, label: '🧸 Teddy Bear' },
    'choc': { price: 18, label: '🍫 Chocolates' },
    'perfume': { price: 35, label: '🕯️ Scented Candle' },
    'balloon': { price: 12, label: '🎈 Balloon' }
  };
  
  document.querySelectorAll('#buildStep5 .addon-item input[type="checkbox"]:checked').forEach(checkbox => {
    const value = checkbox.value;
    if (addonsMap[value]) {
      addonsPrice += addonsMap[value].price;
      addonsSelected.push(addonsMap[value].label);
    }
  });
  
  // 总价 = 基础价 + Add-ons 价
  const totalPrice = basePrice + addonsPrice;
  
  cart.push({
    id: 'custom-' + Date.now(),
    name: 'Custom Bouquet 自定花束',
    price: totalPrice,
    priceDisplay: `RM${totalPrice}`,
    emoji: '🌸',
    qty: 1,
    size: buildSelections.size,
    type: buildSelections.type,
    flowers: buildSelections.flowers.join(', '),
    color: buildSelections.color,
    message: document.getElementById('buildMessage')?.value || '',
    addons: addonsSelected.join(', '),
    addonPrice: addonsPrice,
    custom: true
  });
  
  saveCart();
  updateCartBadge();
  
  let toastMsg = `🌸 Custom bouquet added! RM${totalPrice}`;
  if (addonsPrice > 0) {
    toastMsg += `\n(Bouquet: RM${basePrice} + Add-ons: RM${addonsPrice})`;
  }
  toastMsg += '\n自定花束已加入购物车';
  
  showToast(toastMsg);
  showPage('cart');
}
}

function saveCart() { localStorage.setItem('gabuuCart', JSON.stringify(cart)); }
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
  document.getElementById('cartBadge').style.display = total > 0 ? 'flex' : 'none';
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  if (!cart.length) {
    container.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><h3>Your cart is empty 购物车是空的</h3><p>Add some beautiful bouquets! 快来挑选美丽的花束吧！</p><button class="btn-primary" onclick="showPage('shop')">Shop Now 去购物</button></div>`;
    summary.style.display = 'none';
    return;
  }
  summary.style.display = 'block';
  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">
        ${item.size || ''}
  ${item.color ? ' · ' + item.color : ''}
  ${item.addons ? ' · Add-ons: ' + item.addons : ''}
  ${item.message ? ' · "' + item.message.substring(0,30) + (item.message.length>30?'...':'') + '"' : ''}
</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${idx},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${idx},1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <div class="cart-item-price">RM${(item.price * item.qty).toLocaleString()}</div>
        <button class="cart-item-del" onclick="removeItem(${idx})" title="Remove">✕</button>
      </div>
    </div>`).join('');
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('subtotal').textContent = `RM${subtotal.toLocaleString()}`;
  document.getElementById('cartTotal').textContent = `RM${(subtotal + 30).toLocaleString()}`;
}

function updateQty(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(); updateCartBadge(); renderCart();
}

function removeItem(idx) {
  cart.splice(idx, 1);
  saveCart(); updateCartBadge(); renderCart();
}

// ===== CHECKOUT =====
function renderCheckout() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('checkoutItems').innerHTML = cart.map(i => `<div class="checkout-item"><span>${i.emoji} ${i.name} × ${i.qty}</span><span>RM${(i.price*i.qty).toLocaleString()}</span></div>`).join('');
  document.getElementById('coSubtotal').textContent = `RM${subtotal.toLocaleString()}`;
  document.getElementById('coTotal').textContent = `RM${(subtotal + 30).toLocaleString()}`;
  const today = new Date(); today.setDate(today.getDate() + 1);
  document.getElementById('co-date').min = today.toISOString().split('T')[0];
}

function updateDeliveryFee() {
  const city = document.getElementById('co-city').value;
  const isKV = ['kl','pj','subang','shah-alam','klang','ampang','cheras'].includes(city);
  const fee = isKV ? 30 : 0;
  document.getElementById('coDelivery').textContent = isKV ? 'RM30' : 'TBC (contact us)';
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('coTotal').textContent = fee ? `RM${(subtotal + fee).toLocaleString()}` : `RM${subtotal.toLocaleString()} + delivery`;
}

function proceedToWhatsApp() {
  const name = document.getElementById('co-name')?.value;
  const phone = document.getElementById('co-phone')?.value;
  const address = document.getElementById('co-address')?.value;
  const date = document.getElementById('co-date')?.value;
  const time = document.getElementById('co-time')?.value;
  const message = document.getElementById('co-message')?.value;
  if (!name || !phone || !address || !date) { showToast('Please fill in all required fields! 请填写所有必填项目'); return; }
  const items = cart.map(i => `${i.emoji} ${i.name} (${i.size||''}) × ${i.qty} = RM${i.price*i.qty}`).join('\n');
  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const msg = `Hello GaBuu! 您好！\n\n🌸 *NEW ORDER 新订单*\n\n*Recipient 收花人:* ${name}\n*Phone 电话:* ${phone}\n*Address 地址:* ${address}\n*Date 日期:* ${date}\n*Time 时间:* ${time}\n\n*Items 商品:*\n${items}\n\n*Subtotal 小计:* RM${subtotal}\n*Delivery 运费:* RM30\n*Total 总计:* RM${subtotal+30}\n\n${message ? '*Message 留言:* ' + message : ''}\n\nPlease confirm my order! 请确认我的订单！`;
  window.open(`https://wa.me/60126432729?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== BUILD BOUQUET =====
function selectBuildOption(type, value, el) {
  const step = el.closest('.build-step');
  step.querySelectorAll('.build-option-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  buildSelections[type] = value;
  updateBuildSummary();
}

function toggleFlower(name, el) {
  el.classList.toggle('selected');
  if (el.classList.contains('selected')) {
    if (!buildSelections.flowers.includes(name)) buildSelections.flowers.push(name);
  } else {
    buildSelections.flowers = buildSelections.flowers.filter(f => f !== name);
  }
  updateBuildSummary();
}

function updateBuildSummary() {
  const content = document.getElementById('summaryContent');
  const rows = [];
  if (buildSelections.type) rows.push({ label: 'Type 类型', value: buildSelections.type });
  if (buildSelections.flowers.length) rows.push({ label: 'Flowers 花材', value: buildSelections.flowers.join(', ') });
  if (buildSelections.color) rows.push({ label: 'Colour 色系', value: buildSelections.color });
  if (buildSelections.size) rows.push({ label: 'Size 尺寸', value: buildSelections.size });
  if (!rows.length) { content.innerHTML = '<p class="summary-empty">Start selecting options above to build your bouquet.</p>'; return; }
  content.innerHTML = rows.map(r => `<div class="summary-item"><span>${r.label}</span><span>${r.value}</span></div>`).join('');
  if (buildSelections.size) {
    const price = buildSelections.size.match(/RM(\d+)/)?.[1] || '88';
    document.getElementById('summaryPrice').textContent = `From RM${price}`;
  }
}

// ===== CONTACT FORM =====
function sendContactForm() {
  showToast('Message sent! We\'ll reply soon. 消息已发送，我们很快回复！');
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== INIT =====
renderFeatured();
updateCartBadge();

// Set min date for delivery
const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(el => el.min = minDate);
