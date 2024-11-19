import { categories } from '@/constans';
import React from 'react'

interface ShopDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ShopDetailPageProps) {
  const resolvedParams = await params;
  const project = categories.find(product =>
    product.href.includes(resolvedParams.slug)
  );
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
  return {
    title: project.title,
    description: project.description,
  };
}


export default async function ShopDetailPage({ params }: ShopDetailPageProps) {
  const resolvedParams = await params;
  return (
    <div>
      {resolvedParams.slug}
    </div>
  );
}

