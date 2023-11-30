//배열 데이터만 담을 js파일
const initialBests = [
  {
      id: 1,
      name: "핸드워시",
      price: 23000,
      descript: "",
      image:"https://media.istockphoto.com/id/1203784249/photo/blank-transparent-amber-black-glass-bottle-with-white-label-mockup.jpg?s=612x612&w=0&k=20&c=BFSuLJjz54OxPuo2HOivz_ASzu6LuOqXyt1bHMBze00=",
      like: false
    },
  {
      id: 2,
      name: "블러셔",
      price: 42000,
      descript: "여린 발색, 물 오른 청순톤 얼굴",
      image: "https://media.istockphoto.com/id/1152571527/photo/professional-makeup-tools-with-colorful-curves-paper-background.jpg?s=612x612&w=0&k=20&c=MKoChWXs47KUCaaOVG7JqmMh9sqNfFrb6xo6dyufjO0=",
      like: false
  }, 
  {
      id: 3,
      name: "앰플",
      price: 23000,
      descript: "",
      image: "https://media.istockphoto.com/id/1282415009/photo/medical-spa-cosmetics-serum-on-blue-water-texture-background-with-splashes.jpg?s=612x612&w=0&k=20&c=-J3NTXNUO_LlcLK9c9a7p62L530-nolRSO7-ZRRZuIE=",
      like: false
  },
  {
      id: 4,
      name: "립밤",
      price: 25000,
      descript: "끈적임 없이 유리알 광택을 연출하는 글로우 립밤",
      image: "https://media.istockphoto.com/id/1014344686/photo/creamy-make-up-products-top-view-of-decorative-cosmetic-containers-isolated-on-white.jpg?s=612x612&w=0&k=20&c=etV6snth0Zhrpwb46luMdV30YxS_evsVVwqjeiJYM-A=",
      like: false
  },
  {
      id: 5,
      name: "바디미스트",
      price: 20000,
      descript: "또렷한 인상을 완성하는 브로우 포마드",
      image: "https://media.istockphoto.com/id/1304157246/photo/set-of-natural-organic-spa-beauty-products-on-wooden-board-homemade-soap-moisturizer-cream.jpg?s=612x612&w=0&k=20&c=7XY244iHppwZc8MtpIO_fo7SyAkIC4fjncZgOg4XGtE=",
      like: false
  }, 
  {
      id: 6,
      name: "셰도우",
      price: 25000,
      descript: "아티스트 C컬로 스타일을 업그레이드 하다",
      image: "https://media.istockphoto.com/id/1370468785/photo/a-nude-eyeshadow-palette-and-makeup-artists-tools-on-a-marble-vanity-brushes-for-powder-blush.jpg?s=612x612&w=0&k=20&c=8K-VjKOtdomupO_HDwhOmVe3KNKGwquUVMzq9bbLi7Q=",
      like: false
  }, 
  {
      id: 7,
      name: "비건 스킨케어, 비긴스",
      price: 25000,
      descript: "비건 스킨케어",
      image: "https://media.istockphoto.com/id/1223236097/vector/vector-tinted-brown-glass-or-plastic-jar-pump-bottle-dropper-bottle-package-set-with.jpg?s=612x612&w=0&k=20&c=sDU8eVuzeFd9wljPtYGI0AplindYjMX_bzU3bBiZAQM=",
      like: false
  },
  {
      id: 8,
      name: "립스틱",
      price: 25000,
      descript: "정샘물 비건 스킨케어, 비긴스",
      image: "https://media.istockphoto.com/id/1151790560/photo/set-of-beautiful-lipsticks-on-pink-background.jpg?s=612x612&w=0&k=20&c=fDiVJwXg3zueLRqo8cCAny8pDYHa5tZ5Hpr5zdzb8lg=",
      like: false
  },
  {
      id: 9,
      name: "쿠션",
      price: 25000,
      descript: "투명 피부, 내추럴 누드 쿠션 미백, 주름개선, 자외선 차단(SPF50+ / PA+++) 기능성 화장품",
      image: "https://media.istockphoto.com/id/944259474/photo/foundation-cushion-with-sponge-and-puff-on-white-background.jpg?s=612x612&w=0&k=20&c=g_RBp1ST3erPpLUyqAnaEnY-NV_bz_g9vmCZn9pNFN8=",
      like: false
  },
  {
      id: 10,
      name: "마스카라",
      price: 25000,
      descript: "아티스트 C컬로 스타일을 업그레이드 하다",
      image: "https://media.istockphoto.com/id/1325452536/photo/mascara-on-blue-background-top-view-makeup-product.jpg?s=612x612&w=0&k=20&c=s3WuAnEgfD-_aoHZInTbbzT8IoPHt3LHbqDqIqsKbIc=",
      like: false
  },
  {
      id: 11,
      name: "아이라이너",
      price: 25000,
      descript: "또렷한 인상을 완성하는 아이라이너",
      image: "https://media.istockphoto.com/id/500173419/photo/eyeliner-and-stroke.jpg?s=612x612&w=0&k=20&c=4pjKfr-zTqzJVBcGp8nOatztocKWyxEJqDy2nFB8MqM=",
      like: false
  },
  {
      id: 12,
      name: "컨실러",
      price: 25000,
      descript: "결점없는 완벽 커버",
      image: "https://media.istockphoto.com/id/944065736/photo/doe-foot-applicator-next-to-tube-of-creamy-concealer-high-cover-to-conceal-spots-blemishes.jpg?s=612x612&w=0&k=20&c=PKxanY6KVaIe48qpphtVxMKtBch50Bv6NO7pqCudmNs=",
      like: false
  }
];

export { initialBests };