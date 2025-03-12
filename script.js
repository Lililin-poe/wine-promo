document.addEventListener('DOMContentLoaded', function() {
    // 年龄验证
    const ageVerification = document.getElementById('age-verification');
    const verifyBtn = document.getElementById('verify-btn');
    const rejectBtn = document.getElementById('reject-btn');

    // 检查本地存储
    if (!localStorage.getItem('age-verified')) {
        ageVerification.style.display = 'flex';
    } else {
        ageVerification.style.display = 'none';
    }

    verifyBtn.addEventListener('click', function() {
        localStorage.setItem('age-verified', 'true');
        ageVerification.style.opacity = '0';
        setTimeout(() => {
            ageVerification.style.display = 'none';
        }, 500);
    });

    rejectBtn.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });

    // 公众号二维码弹窗
    const qrcodeModal = document.getElementById('qrcode-modal');
    const closeQrcode = document.getElementById('close-qrcode');
    const contactBtns = document.querySelectorAll('#contact-btn, .mobile-contact-btn, #hero-contact-btn, #collection-contact-btn, #footer-contact-btn');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            qrcodeModal.style.display = 'flex';
            qrcodeModal.style.opacity = '0';
            setTimeout(() => {
                qrcodeModal.style.opacity = '1';
            }, 10);
        });
    });

    closeQrcode.addEventListener('click', function() {
        qrcodeModal.style.opacity = '0';
        setTimeout(() => {
            qrcodeModal.style.display = 'none';
        }, 500);
    });

    // 移动端菜单
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 滚动效果
    const header = document.querySelector('.sticky-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // 向下滚动
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            header.style.transform = 'translateY(0)';
        }

        if (scrollTop <= 50) {
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // 产品数据
    const wineCollection = [
        {
            id: 1,
            name: "珍藏赤霞珠",
            year: "2015",
            description: "浓郁的黑醋栗和黑莓风味，单宁柔顺，余味悠长",
            price: "¥1,288",
            image: "https://source.unsplash.com/random/200x500/?wine,red",
            badge: "限量版"
        },
        {
            id: 2,
            name: "典藏梅洛",
            year: "2017",
            description: "李子和樱桃的香气，单宁圆润，口感丝滑",
            price: "¥988",
            image: "https://source.unsplash.com/random/200x500/?wine,merlot"
        },
        {
            id: 3,
            name: "精选霞多丽",
            year: "2019",
            description: "柑橘和热带水果的香气，酸度均衡，回味清新",
            price: "¥788",
            image: "https://source.unsplash.com/random/200x500/?wine,white",
            badge: "新品"
        },
        {
            id: 4,
            name: "陈酿品丽珠",
            year: "2016",
            description: "黑加仑和香草的风味，单宁结构紧实，余韵深长",
            price: "¥1,088",
            image: "https://source.unsplash.com/random/200x500/?wine,cabernet"
        }
    ];

    // 画廊数据
    const galleryImages = [
        {
            id: 1,
            src: "https://source.unsplash.com/random/1200x800/?vineyard",
            alt: "葡萄园全景",
            caption: "我们的葡萄园坐落于风景如画的山谷中"
        },
        {
            id: 2,
            src: "https://source.unsplash.com/random/1200x800/?wine,cellar",
            alt: "酒窖内景",
            caption: "百年历史的橡木桶酒窖，保持恒温恒湿"
        },
        {
            id: 3,
            src: "https://source.unsplash.com/random/1200x800/?winemaking",
            alt: "酿酒过程",
            caption: "传统与现代工艺的完美结合"
        },
        {
            id: 4,
            src: "https://source.unsplash.com/random/1200x800/?wine,tasting",
            alt: "品鉴体验",
            caption: "专业品酒师带您领略不同年份的风味变化"
        }
    ];

    // 评价数据
    const testimonials = [
        {
            id: 1,
            name: "张先生",
            role: "葡萄酒收藏家",
            content: "作为一名资深葡萄酒收藏家，我对酒的品质有着极高的要求。这款酒的层次感和复杂度令人惊叹，绝对是我收藏中的佼佼者。",
            rating: 5,
            avatar: "https://source.unsplash.com/random/100x100/?man"
        },
        {
            id: 2,
            name: "李女士",
            role: "美食博主",
            content: "这款酒与我准备的牛排完美搭配，酒体饱满，单宁柔顺，为整个晚餐增添了无与伦比的享受。强烈推荐给所有美食爱好者！",
            rating: 5,
            avatar: "https://source.unsplash.com/random/100x100/?woman"
        },
        {
            id: 3,
            name: "王教授",
            role: "品酒师",
            content: "作为专业品酒师，我能感受到这款酒中蕴含的匠心与热情。从香气到口感，再到余韵，每一个细节都经过精心打磨，展现出卓越的品质。",
            rating: 4,
            avatar: "https://source.unsplash.com/random/100x100/?professor"
        }
    ];

    // 渲染产品
    const wineGrid = document.getElementById('wine-collection');

    wineCollection.forEach(wine => {
        const wineCard = document.createElement('div');
        wineCard.className = 'wine-card';
        wineCard.innerHTML = `
            <div class="wine-image">
                ${wine.badge ? `<span class="wine-badge">${wine.badge}</span>` : ''}
                <img src="${wine.image}" alt="${wine.name}">
            </div>
            <div class="wine-details">
                <h3 class="wine-title">${wine.name}</h3>
                <p class="wine-year">${wine.year}年</p>
                <p class="wine-description">${wine.description}</p>
                <div class="wine-footer">
                    <span class="wine-price">${wine.price}</span>
                </div>
            </div>
        `;
        wineGrid.appendChild(wineCard);
    });

    // 渲染画廊
    const galleryContainer = document.getElementById('gallery-container');
    const galleryDots = document.getElementById('gallery-dots');
    const galleryPrev = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    let currentSlide = 0;

    galleryImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `gallery-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${image.src})`;
        slide.innerHTML = `
            <div class="gallery-caption">${image.caption}</div>
        `;
        galleryContainer.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        galleryDots.appendChild(dot);
    });

    function showSlide(index) {
        const slides = document.querySelectorAll('.gallery-slide');
        const dots = document.querySelectorAll('.gallery-dot');

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    }

    galleryPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
        showSlide(currentSlide);
    });

    galleryNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % galleryImages.length;
        showSlide(currentSlide);
    });

    // 自动轮播
    setInterval(() => {
        currentSlide = (currentSlide + 1) % galleryImages.length;
        showSlide(currentSlide);
    }, 5000);

    // 渲染评价
    const testimonialsContainer = document.getElementById('testimonials-container');

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';

        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<i class="fas fa-star ${i < testimonial.rating ? 'star' : ''}" style="${i >= testimonial.rating ? 'color: #555;' : ''}"></i>`;
        }

        testimonialCard.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-author">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-rating">
                ${stars}
            </div>
            <p class="testimonial-content">"${testimonial.content}"</p>
        `;

        testimonialsContainer.appendChild(testimonialCard);
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .wine-card, .testimonial-card, .contact-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 初始化动画
    elements = document.querySelectorAll('.feature-card, .wine-card, .testimonial-card, .contact-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初始检查
});
