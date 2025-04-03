
import React from 'react';
import { 
  Sidebar as UISidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { File, FolderClosed, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // Mock documents
  const documents = [
    { id: 1, name: "Annual Report 2023.pdf", type: "pdf" },
    { id: 2, name: "Project Proposal.docx", type: "word" },
    { id: 3, name: "Research Paper.pdf", type: "pdf" },
    { id: 4, name: "Budget Forecast.xlsx", type: "excel" },
    { id: 5, name: "Meeting Notes.docx", type: "word" },
    { id: 6, name: "Product Roadmap.pdf", type: "pdf" },
    { id: 7, name: "Client Agreement.docx", type: "word" },
    { id: 8, name: "Product Specs.pdf", type: "pdf" },
  ];

  // Map file types to icons
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <File className="h-4 w-4 text-red-500" />;
      case "word":
        return <File className="h-4 w-4 text-blue-500" />;
      case "excel":
        return <File className="h-4 w-4 text-green-500" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  return (
    <UISidebar>
      <SidebarContent>
        <SidebarHeader>
          <div className="flex items-center justify-between p-2">
            <h2 className="font-medium text-lg">Documents</h2>
            <Badge variant="secondary" className="font-normal text-xs">
              {documents.length} files
            </Badge>
          </div>
        </SidebarHeader>
        
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <FolderClosed className="h-4 w-4" />
            <span>All Documents</span>
          </SidebarGroupLabel>
          
          <SidebarMenu>
            {documents.map((doc) => (
              <SidebarMenuItem key={doc.id}>
                <SidebarMenuButton className="w-full text-left" tooltip={doc.name}>
                  {getFileIcon(doc.type)}
                  <span>{doc.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Document Types</span>
          </SidebarGroupLabel>
          
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full text-left">
                <File className="h-4 w-4 text-red-500" />
                <span>PDF Documents</span>
                <Badge className="ml-auto">4</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full text-left">
                <File className="h-4 w-4 text-blue-500" />
                <span>Word Documents</span>
                <Badge className="ml-auto">3</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton className="w-full text-left">
                <File className="h-4 w-4 text-green-500" />
                <span>Excel Documents</span>
                <Badge className="ml-auto">1</Badge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <p className="text-xs text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </SidebarFooter>
    </UISidebar>
  );
};

// Re-export SidebarProvider from ui/sidebar
export { SidebarProvider } from "@/components/ui/sidebar";
