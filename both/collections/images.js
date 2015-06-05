Images = new FS.Collection("images", {
    stores: [
        new FS.Store.FileSystem("images", {path: "~/uploads"}),

        new FS.Store.FileSystem("thumbs", {
                transformWrite: function(fileObj, readStream, writeStream) {
                    // Transform the image into a 10x10px thumbnail
                    gm(readStream, fileObj.name()).resize('200', '200').stream().pipe(writeStream);
                },
                path:"~/uploads/thumbs"
            }
        ),

        new FS.Store.FileSystem("thumbs_maps", {
                transformWrite: function(fileObj, readStream, writeStream) {
                    // Transform the image into a 10x10px thumbnail
                    gm(readStream, fileObj.name()).resize('50', '50').stream().pipe(writeStream);
                },
                path:"~/uploads/thumbs_maps"
            }
        )

    ],filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});
