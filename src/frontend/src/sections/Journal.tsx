import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Globe, ImageIcon, Loader2, Plus, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { ExternalBlob } from "../backend";
import { SectionWrapper } from "../components/SectionWrapper";
import { useActor } from "../hooks/useActor";
import {
  useCreateJournalEntry,
  useDeleteJournalEntry,
  useGetJournalEntries,
} from "../hooks/useQueries";

function formatDate(ts: bigint): string {
  const ms = Number(ts) / 1_000_000;
  return new Date(ms).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function Journal() {
  const { data: entries, isLoading } = useGetJournalEntries();
  const createEntry = useCreateJournalEntry();
  const deleteEntry = useDeleteJournalEntry();
  const { actor } = useActor();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setTitle("");
    setBody("");
    setIsPublic(false);
    setImageFile(null);
    setImagePreview(null);
    setShowForm(false);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleCreate = async () => {
    if (!title.trim() || !body.trim()) return;
    setUploading(true);
    try {
      let imageUrl: string | null = null;

      await createEntry.mutateAsync({
        title: title.trim(),
        body: body.trim(),
        imageUrl,
        isPublic,
      });

      // Upload image after entry is created
      if (imageFile && actor) {
        const arrayBuffer = await imageFile.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        const blob = ExternalBlob.fromBytes(bytes);
        await actor.updateImage(title.trim(), blob);
        imageUrl = blob.getDirectURL();
      }

      toast.success("Entry woven into your creation log.");
      resetForm();
    } catch {
      toast.error("Could not save entry.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (t: string) => {
    try {
      await deleteEntry.mutateAsync(t);
      toast.success("Entry released.");
    } catch {
      toast.error("Could not delete entry.");
    }
  };

  const isPending = createEntry.isPending || uploading;

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <SectionWrapper
      title="Creation Log"
      subtitle="Your reflective record — intentions, inspirations, and pattern observations."
      icon="🗂️"
    >
      <div className="max-w-2xl space-y-6">
        <div>
          {!showForm ? (
            <Button
              data-ocid="journal.primary_button"
              onClick={() => setShowForm(true)}
              style={{
                background: "oklch(var(--primary))",
                color: "oklch(var(--primary-foreground))",
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Entry
            </Button>
          ) : (
            <AnimatePresence>
              <motion.div
                key="form"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-xl p-5 border space-y-4"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--primary) / 0.2)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="font-display text-base font-semibold"
                    style={{ color: "oklch(var(--primary))" }}
                  >
                    New Entry
                  </h3>
                  <button
                    type="button"
                    onClick={resetForm}
                    style={{ color: "oklch(var(--muted-foreground))" }}
                    aria-label="Close form"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Title */}
                <Input
                  data-ocid="journal.input"
                  placeholder="Entry title…"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{
                    background: "oklch(var(--input))",
                    borderColor: "oklch(var(--border))",
                  }}
                />

                {/* Body */}
                <Textarea
                  data-ocid="journal.textarea"
                  rows={6}
                  placeholder="Write freely about what arises…"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="resize-none"
                  style={{
                    background: "oklch(var(--input))",
                    borderColor: "oklch(var(--border))",
                  }}
                />

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label
                    className="text-sm font-medium"
                    style={{ color: "oklch(var(--foreground))" }}
                  >
                    Card Photo (optional)
                  </Label>
                  <button
                    type="button"
                    className="w-full border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors hover:border-primary/50"
                    style={{ borderColor: "oklch(var(--border))" }}
                    onClick={triggerFileInput}
                    data-ocid="journal.dropzone"
                    aria-label="Upload card photo"
                  >
                    {imagePreview ? (
                      <div className="relative inline-block">
                        <img
                          src={imagePreview}
                          alt="Card preview"
                          className="max-h-40 max-w-full rounded-md object-contain mx-auto"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageFile(null);
                            setImagePreview(null);
                            if (fileInputRef.current)
                              fileInputRef.current.value = "";
                          }}
                          className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center"
                          style={{
                            background: "oklch(var(--destructive))",
                            color: "oklch(var(--destructive-foreground))",
                          }}
                          aria-label="Remove photo"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <div
                        className="flex flex-col items-center gap-2 py-2"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        <ImageIcon className="h-8 w-8 opacity-50" />
                        <p className="text-sm">Click to upload a card photo</p>
                        <p className="text-xs opacity-60">JPG, PNG supported</p>
                      </div>
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handleImageSelect}
                    data-ocid="journal.upload_button"
                  />
                </div>

                {/* Share / Make Public toggle */}
                <div
                  className="flex items-center justify-between rounded-lg px-4 py-3 border"
                  style={{
                    background: "oklch(var(--muted) / 0.3)",
                    borderColor: "oklch(var(--border))",
                  }}
                >
                  <div>
                    <Label
                      htmlFor="isPublic"
                      className="text-sm font-medium cursor-pointer"
                      style={{ color: "oklch(var(--foreground))" }}
                    >
                      Share / Make Public
                    </Label>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      Visible to others in the Witness Space
                    </p>
                  </div>
                  <Switch
                    id="isPublic"
                    checked={isPublic}
                    onCheckedChange={setIsPublic}
                    data-ocid="journal.switch"
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <Button
                    data-ocid="journal.cancel_button"
                    variant="ghost"
                    onClick={resetForm}
                  >
                    Cancel
                  </Button>
                  <Button
                    data-ocid="journal.submit_button"
                    onClick={handleCreate}
                    disabled={isPending || !title.trim() || !body.trim()}
                    style={{
                      background: "oklch(var(--primary))",
                      color: "oklch(var(--primary-foreground))",
                    }}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving…
                      </>
                    ) : (
                      "Save Entry"
                    )}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {isLoading ? (
          <div
            data-ocid="journal.loading_state"
            className="flex items-center gap-2"
            style={{ color: "oklch(var(--muted-foreground))" }}
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading entries…</span>
          </div>
        ) : !entries || entries.length === 0 ? (
          <motion.div
            data-ocid="journal.empty_state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-4xl mb-3">🗂️</div>
            <p
              className="font-display text-lg"
              style={{ color: "oklch(var(--primary))" }}
            >
              Your creation log awaits
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(var(--muted-foreground))" }}
            >
              Record your first reflection above.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.title}
                data-ocid={`journal.item.${i + 1}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl p-5 border"
                style={{
                  background: "oklch(var(--card))",
                  borderColor: "oklch(var(--border))",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="font-display font-semibold text-base"
                        style={{ color: "oklch(var(--foreground))" }}
                      >
                        {entry.title}
                      </h3>
                      {entry.isPublic && (
                        <Badge
                          className="flex items-center gap-1 text-xs"
                          style={{
                            background: "oklch(var(--primary) / 0.15)",
                            color: "oklch(var(--primary))",
                            border: "1px solid oklch(var(--primary) / 0.3)",
                          }}
                        >
                          <Globe className="h-3 w-3" />
                          Public
                        </Badge>
                      )}
                    </div>

                    {/* Card photo thumbnail */}
                    {entry.imageUrl && (
                      <div className="mt-3 mb-2">
                        <img
                          src={entry.imageUrl}
                          alt={entry.title}
                          className="rounded-lg object-cover max-h-48 w-full"
                          style={{ objectPosition: "center" }}
                        />
                      </div>
                    )}

                    <p
                      className="mt-2 text-sm leading-relaxed line-clamp-3"
                      style={{ color: "oklch(var(--muted-foreground))" }}
                    >
                      {entry.body}
                    </p>
                    <p
                      className="mt-2 text-xs"
                      style={{ color: "oklch(var(--muted-foreground) / 0.6)" }}
                    >
                      {formatDate(entry.timestamp)}
                    </p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button
                        type="button"
                        data-ocid={`journal.delete_button.${i + 1}`}
                        className="flex-shrink-0 p-1.5 rounded-lg transition-colors hover:bg-destructive/10"
                        style={{ color: "oklch(var(--muted-foreground))" }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent
                      style={{
                        background: "oklch(var(--card))",
                        borderColor: "oklch(var(--border))",
                      }}
                    >
                      <AlertDialogHeader>
                        <AlertDialogTitle
                          className="font-display"
                          style={{ color: "oklch(var(--foreground))" }}
                        >
                          Release this entry?
                        </AlertDialogTitle>
                        <AlertDialogDescription
                          style={{ color: "oklch(var(--muted-foreground))" }}
                        >
                          &ldquo;{entry.title}&rdquo; will be permanently
                          removed from your creation log.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel data-ocid="journal.cancel_button">
                          Keep it
                        </AlertDialogCancel>
                        <AlertDialogAction
                          data-ocid="journal.confirm_button"
                          onClick={() => handleDelete(entry.title)}
                          style={{
                            background: "oklch(var(--destructive))",
                            color: "oklch(var(--destructive-foreground))",
                          }}
                        >
                          Release
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
