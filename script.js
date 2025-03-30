document.addEventListener('DOMContentLoaded', function() {
    // 年龄验证
    // 年龄验证部分（修复后）
    const ageVerification = document.getElementById('age-verification');
    const verifyBtn = document.getElementById('verify-btn');
    const rejectBtn = document.getElementById('reject-btn');

// 仅在存在年龄验证模块时执行
    if (ageVerification) {
        if (!sessionStorage.getItem('age-verified')) {
            ageVerification.style.display = 'flex';
        }

        // 安全绑定验证按钮
        if (verifyBtn) {
            verifyBtn.addEventListener('click', function() {
                sessionStorage.setItem('age-verified', 'true');
                ageVerification.style.opacity = '0';
                setTimeout(() => {
                    ageVerification.style.display = 'none';
                }, 500);
            });
        }

        // 安全绑定拒绝按钮
        if (rejectBtn) {
            rejectBtn.addEventListener('click', function() {
                window.location.href = 'https://www.google.com';
            });
        }
    }

    // 公众号二维码弹窗
    const qrcodeModal = document.getElementById('qrcode-modal');
    const closeQrcode = document.getElementById('close-qrcode');
    const contactBtns = document.querySelectorAll(
        '#contact-btn, .mobile-contact-btn, #hero-contact-btn, #products-contact-btn, #footer-contact-btn, #wine-contact-btn, #incense-contact-btn, #tea-contact-btn, #about-contact-btn'
    );

    contactBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (qrcodeModal) {
                qrcodeModal.style.display = 'flex';
                qrcodeModal.style.opacity = '0';
                setTimeout(() => {
                    qrcodeModal.style.opacity = '1';
                }, 10);
            } else {
                console.error('qrcodeModal 未找到');
            }
        });
    });

    if (closeQrcode) {
        closeQrcode.addEventListener('click', function() {
            if (qrcodeModal) {
                qrcodeModal.style.opacity = '0';
                setTimeout(() => {
                    qrcodeModal.style.display = 'none';
                }, 500);
            }
        });
    }

    // 移动端菜单
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

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
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        if (scrollTop <= 50) {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // 产品分类切换
    const categoryTabs = document.querySelectorAll('.category-tab');
    const productCategories = document.querySelectorAll('.product-category');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            categoryTabs.forEach(t => t.classList.remove('active'));
            productCategories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(category).classList.add('active');
        });
    });

    // 画廊数据
    const galleryImages = [
        {
            id: 1,
            src: "./image/500ml酒.png",
            alt: "金润生养生酒",
            caption: "对于疏通血管、缓解疼痛、保护心血管、止泻、护胃、暖胃等有独特的功效。"
        },
        {
            id: 2,
            src: "./image/6片装祥云香.png",
            alt: "祥云香",
            caption: "其香清雅温和，久而弥香，养心安神"
        },
        {
            id: 3,
            src: "./image/精油1png.png",
            alt: "沉香精油",
            caption: "香味清爽持久，通过按摩吸收，可镇静抗炎、舒缓肌肉组织。"
        },
        {
            id: 4,
            src: "./image/吉祥1.png",
            alt: "奇楠沉香茶",
            caption: "味辛，性温，具有助眠安神的作用"
        }
    ];

    // 评价数据
    const testimonials = [
        {
            id: 1,
            name: "张先生",
            role: "收藏家",
            content: "作为一名资深收藏家，我对产品的品质有着极高的要求。这款沉香的纯度和香气令人惊叹，绝对是我收藏中的佼佼者。",
            rating: 5,
            avatar: "https://source.unsplash.com/random/100x100/?man"
        },
        {
            id: 2,
            name: "李女士",
            role: "茶道爱好者",
            content: "这款茶叶与我收藏的紫砂壶完美搭配，香气高扬，回甘持久，为整个品茗过程增添了无与伦比的享受。强烈推荐给所有茶道爱好者！",
            rating: 5,
            avatar: "https://source.unsplash.com/random/100x100/?woman"
        },
        {
            id: 3,
            name: "王教授",
            role: "文化学者",
            content: "作为文化学者，我能感受到这些产品中蕴含的传统文化精髓。从选材到工艺，每一个细节都经过精心打磨，展现出东方美学的独特魅力。",
            rating: 4,
            avatar: "https://source.unsplash.com/random/100x100/?professor"
        }
    ];

    // 渲染画廊
    const galleryContainer = document.getElementById('gallery-container');
    const galleryDots = document.getElementById('gallery-dots');
    const galleryPrev = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    let currentSlide = 0;

    if (galleryContainer) {
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

        setInterval(() => {
            currentSlide = (currentSlide + 1) % galleryImages.length;
            showSlide(currentSlide);
        }, 5000);
    }


    // 渲染评价
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
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
    }

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
        const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .contact-item');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .contact-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // 添加英雄区域了解更多按钮的跳转事件
    const learnMoreBtn = document.getElementById('learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = 'about-us.html';
        });
    }

    // 添加产品卡片了解更多按钮的跳转事件
    const productDetailBtns = document.querySelectorAll('.product-card .btn[data-target]');
    productDetailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            window.location.href = target;
        });
    });

    // 平滑滚动到详情页面锚点
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// 添加页面加载进度指示器
document.addEventListener('DOMContentLoaded', function() {
    // 隐藏加载指示器
    document.getElementById('page-loader').style.display = 'none';
});
