<template>
  <section class="intro">
      <div class="content">
        <div class="row m-0 align-items-center">
            <div class="col">
                <h1>
                    SEVEN
                    <span>7</span>
                </h1>
                <h2>
                    BUSINESS
                </h2>
                <p>
                    See things in the present,even if they are in the future.
                </p>
            </div>
            <div class="col-auto phone">
                <h3>
                    <font-awesome-icon icon="fa-solid fa-square-phone" />
                    +1 (001) 987 65 43
                </h3>
                <p>
                    We are ready to start a project of any complexity.
                    <a href="#">Call us now!</a> 
                </p>
            </div>
        </div>
      </div>
      <svg class="end-seprator" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#ffffff" width="100%" height="100" viewBox="0 0 4 0.266661" preserveAspectRatio="none" style="height: 100px;"><polygon class="fil0" points="4,0 4,0.266661 -0,0.266661 "></polygon></svg>
  </section>
</template>

<script>
export default {
    name: 'AppHomeIntro',
    data () {
        return {

        }
    }

}
</script>

<style lang="scss">
    .intro {
        background-size: cover;
        background-repeat: no-repeat;
        background-color: rgba(0, 0, 0, 0);
        background-image: url("https://the7.io/business-one-page/wp-content/uploads/sites/36/2016/12/img-row-041.jpg");
        background-attachment: fixed;
        position: relative;
    }
    .intro .content {
        padding: 200px 60px 0;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .intro .end-seprator {
        position: absolute;
        bottom: 0;
    }
    .intro h1 {
        color: rgb(255, 255, 255);
        font-family: 'Oswald', sans-serif;
        font-size: 154px;
        font-weight: 700;
        height: 160px;
        line-height: 160px;
    }
    .intro h1 span {
        color: rgb(225, 61, 58);
        font-family: 'Oswald', sans-serif;
        font-size: 154px;
        font-weight: 300;
        height: 160px;
        line-height: 160px;
        opacity: 1;
    }
    .intro h2 {
        color: rgb(255, 255, 255);
        font-family: "Oswald";
        font-size: 154px;
        font-weight: 300;
        height: 160px;
        line-height: 160px;
    }

    .intro p {
        font-family: "Roboto";
        font-size: 33px;
        font-weight: 400;
        height: 100px;
        line-height: 42px;
        color: rgb(255, 255, 255);
    }
    @include xs {
        .intro .content {
            padding: 200px 20px 0;
            min-height: 100vh;
            background-color: rgba(0, 0, 0, 0.4);
        }
        .intro h1 {
            font-size: 64px;
            line-height: 70px;
            height: 80px;
        }
        .intro h1 span {
            font-size: 64px;
            line-height: 70px;
        }
        .intro h2 {
            font-size: 64px;
            line-height: 70px;
            height: 80px;
        }

        .intro p {
            font-size: 25px;
            line-height: 30px;
        }
    }
    .intro .phone {
        border: 2px solid #fff;
        padding: 15px;
        width: 320px;
        height: 155px;
        text-align: center;
    }
    .intro .phone h3 {
        box-sizing: border-box;
        color: rgb(255, 255, 255);
        font-family: "Oswald";
        font-size: 28px;
        font-weight: 400;
        height: 40px;
        line-height: 38px;
    }
    .intro .phone p {
        color: rgb(255, 255, 255);
        font-size: 17px;
        font-weight: 500;
        height: 70px;
        line-height: 26px;
        margin: 0;
    }
    .intro .phone p a{
        color: rgb(225, 61, 58);
        text-align: center;
        line-height: 26px;
        letter-spacing: 0px;
        font-weight: 500;
        font-size: 17px;
        text-decoration: none;
    }
</style>