const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Erkek Giyim",
    href: "/shop/men",
    description: "Erkekler için gömlek, pantolon, tişört ve daha fazlası.",
  },
  {
    title: "Kadın Giyim",
    href: "/shop/women",
    description: "Kadınlar için elbise, bluz, etek ve daha fazlası.",
  },
  {
    title: "Çocuk Giyim",
    href: "/shop/child",
    description: "Çocuklar için rahat ve şık kıyafetler.",
  },
  {
    title: "Aksesuarlar",
    href: "/shop/aksesuarlar",
    description: "Çanta, takı, kemer gibi tamamlayıcı aksesuarlar.",
  },
  {
    title: "Ayakkabı",
    href: "/shop/ayakkabi",
    description: "Geniş ayakkabı koleksiyonu; spor, klasik ve günlük seçenekler.",
  },
  {
    title: "İndirimli Ürünler",
    href: "/shop/indirim",
    description: "Özel indirimli ürünler ve kampanyalar.",
  },
];

 export interface SSsType{
  id:string;
  title:string;
  description:string;
 }

 const sssList:SSsType[] = [
  {
    id: "item-1",
    title: "title 1 sss",
    description: "Erkekler için gömlek, pantolon, tişört ve daha fazlası.",
  },  {
    id: "item-2",
    title: "title 2 sss",
    description: "Erkekler için gömlek, pantolon, tişört ve daha fazlası.",
  },  {
    id: "item-3",
    title: "title 3 sss",
    description: "Erkekler için gömlek, pantolon, tişört ve daha fazlası.",
  }
 ]
export {
  categories,
  sssList
}