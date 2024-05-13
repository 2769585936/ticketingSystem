<script setup></script>

<template>
    <div class="box">
        <div class="img">
            <img src="https://img.js.design/assets/img/643d16474274fef453c2ce8f.png" />
        </div>
        <div class="details-content">
            <p class="title">
                <span class="title-text">我和我的家鄉</span>
                <span class="title-state">预告片</span>
            </p>
            <p class="daoyan">
                <span class="text">導演：甯浩、徐峥、陳思誠、闫非、彭大…</span>
            </p>
            <p class="score">
                <img src="@/assets/images/score-r.png" alt="">
            </p>
            <p class="tabs">
                <span class="tab">动作</span>
                <span class="tab">犯罪</span>
            </p>
            <p class="describe">
                《小时代》是由郭敬明执导，杨幂、郭采洁、陈学冬、柯震东、郭碧婷、谢依霖、凤小岳、锦荣等领衔主演的系列影片。 该系列共有影片四部，其第一部于2013年6月2…
            </p>
            <p class="books">
                <button class="btn">订票</button>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.box {

    height: 240px;
    display: flex;
    flex-wrap: wrap;

    .img {
        width: 175px;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .details-content {
        flex: 1;
        padding: 20px;
        border: 1px solid rgba(128, 128, 128, .2);
        border-left: none;

        .title {
            display: flex;
            justify-content: space-between;

            .title-text {
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;
                color: rgba(255, 255, 255, 1);

            }


        }

        .title-state {
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            color: rgba(255, 109, 83, 1);
        }

        .daoyan {
            margin-bottom: 5px;

            .text {
                font-size: 12px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 17px;
                color: rgba(139, 139, 152, 1);
            }
        }


        .tabs {
            margin-top: 5px;

            .tab {
                padding: 2px 3px;
                border-radius: 5px;
                background: rgba(128, 128, 128, 1);
                font-size: 10px;
                font-weight: 500;
                margin-right: 8px;
                color: rgba(255, 255, 255, 1);

            }
        }

        .describe {
            margin-top: 15px;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 17px;
            color: rgba(255, 255, 255, 1);
        }

        .books {
            margin-top: 15px;
            text-align: right;

            .btn {
                width: 175px;
                height: 36px;
                opacity: 1;
                background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
                box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
                font-size: 14px;
                font-weight: 600;
                letter-spacing: 0px;
                line-height: 20px;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                vertical-align: top;
                border-radius: 8px;
            }
        }
    }
}
</style>