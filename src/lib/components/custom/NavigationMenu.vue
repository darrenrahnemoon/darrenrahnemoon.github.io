<template>
    <div>
        <nav id="navigation-main">
            <div class="menu">
                <div class="bar" />
                <a
                    v-for="(item, index) in menuDesktopReverse"
                    v-if="index < menuDesktopReverse.length / 2"
                    :key="index"
                    :title="item.title"
                    :href="item.path"
                    class="lower-item"
                >{{ item.title }}</a>
                <div class="logo">
                    <slot name="logo" />
                </div>
                <a
                    v-for="(item, index) in menuDesktopReverse"
                    v-if="index >= menuDesktopReverse.length / 2"
                    :key="index"
                    :title="item.title"
                    :href="item.path"
                    class="upper-item"
                >{{ item.title }}</a>
            </div>
        </nav>
        <nav id="navigation-main-mobile">
            <div class="menu">
                <a
                    v-for="(item, index) in menuMobileReverse"
                    v-if="item.isMobile"
                    :key="index"
                    :title="item.title"
                    :href="item.path"
                >{{ item.title }}</a>
            </div>
            <div class="menu-trigger" :class="{ 'open' : menuMobileIsOpen }" @click="menuMobileTrigger">
                <span class="la la-bars" />
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $ from 'jquery';
import {
    TimelineMax, TweenMax, Power0, Power4, Expo
} from 'gsap';

@Component
export default class NavigationMenu extends Vue {
    @Prop()
    menu: any;

    menuMobileIsOpen = false;

    get menuDesktopReverse() {
        return this.menu.filter(item => item.isDesktop).reverse();
    }

    get menuMobileReverse() {
        return this.menu.filter(item => item.isMobile).reverse();
    }

    // eslint-disable-next-line class-methods-use-this
    menuTimeline() {
        const navigationMenuTimeline = new TimelineMax({
            paused : true,
        });

        $('#navigation-main .logo path').each(function() {
            $(this).css('stroke-dasharray', $(this).get(0).getTotalLength());
            $(this).css('stroke-dashoffset', $(this).get(0).getTotalLength());
        });

        navigationMenuTimeline.to('#navigation-main', 0.5, {
            left : '0',
            ease : Power0.easeInOut,
        }, 1.5);
        navigationMenuTimeline.to('#container-main', 0.5, {
            marginLeft : '120px',
            ease       : Power0.easeInOut,
        }, 1.5);
        navigationMenuTimeline.to('#navigation-main .lower-item', 0.5, {
            x    : '50vh',
            ease : Power0.easeInOut,
        }, 2);
        navigationMenuTimeline.to('#navigation-main .logo path', 2, {
            strokeDashoffset : 0,
            ease             : Power4.easeOut,
        }, 2);
        navigationMenuTimeline.to('#navigation-main .upper-item', 0.5, {
            x    : '-50vh',
            ease : Power0.easeInOut,
        }, 2);
        navigationMenuTimeline.to('#navigation-main .menu .bar', 0.5, {
            width : '90vh',
            ease  : Expo.easeOut,
        }, 3);
        if ($(window).height() > 650 && $(window).width() > 768) {
            navigationMenuTimeline.play();
        }
        $(window).on('resize', () => {
            if ($(window).height() > 650 && $(window).width() > 768) {
                navigationMenuTimeline.restart();
            }
            else {
                navigationMenuTimeline.pause(0, true);
            }
        });
    }

    menuMobileTrigger() {
        if (this.menuMobileIsOpen) {
            TweenMax.to('#navigation-main-mobile .menu a', 0.1, {
                opacity : 0,
                x       : -100,
                ease    : Expo.easeIn,
                onComplete() {
                    $(this.target).css('pointer-events', 'none');
                },
            });
            $('#dark-overlay-wrapper').fadeOut();
        }
        else {
            $('#dark-overlay-wrapper').fadeIn();
            TweenMax.to('#navigation-main-mobile .menu a', 0.1, {
                opacity : 1,
                x       : 0,
                ease    : Expo.easeOut,
                onComplete() {
                    $(this.target).css('pointer-events', 'auto');
                },
            });
        }
        this.menuMobileIsOpen = !this.menuMobileIsOpen;
    }

    mounted() {
        this.menuTimeline();
    }
}
